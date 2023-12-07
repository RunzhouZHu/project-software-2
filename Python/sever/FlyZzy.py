import Python.configration.DatebaseConnectionBySQLAlchemy as db
from flask import Blueprint, g
from geopy import distance
from itertools import groupby

zzyApp = Blueprint('zzyApp', __name__)


# settle  fly
# param {paramToBack:
#           {"player_id": xxx, (must)
#           "current_location": xxx} (must, if do not need change, input "") airport_id
#           "task_amount": xxx, (must, if do not need change, input"") example: 1/-1
#           "player_pic": xxx} (must, if do not need change, input"")
#           }
# @zzyApp.route("/updatePlayer")
# def updatePlayer():
#     param_value = g.get("paramToBack", None);
#     player_id = param_value['player_id'];
#     current_location = str(param_value['current_location']);
#     task_amount = str(param_value['task_amount']);
#     player_pic = str(param_value['player_pic']);
#
#     sql = (f"UPDATE player set current_location='{'current_location' if current_location == '' else current_location}',"
#            f"current_amount = current_amount+{'0' if task_amount == '' else task_amount}"
#            f" {'' if player_pic == '' else f',player_pic = {player_pic}'}"
#            f" where player_id ={player_id}");
#     return db.oprateData(sql);


def updatePlayer(player_id, current_location, task_amount, player_pic):
    sql = (f"UPDATE player set current_location='{'current_location' if current_location == '' else current_location}',"
           f"current_amount = current_amount+{'0' if task_amount == '' else task_amount}"
           f" {'' if player_pic == '' else f',player_pic = {player_pic}'}"
           f" where player_id ={player_id}");
    return db.oprateData(sql);

#
# settle
# param {paramToBack:
#           {"player_id": xxx, (must)
#           "task_id": xxx (must)
#           }



# fly  buyIteam  changeAirPlaneByPlayerId-is_current_airplane
# param {paramToBack:
#           {"player_id": xxx, (must)
#           "airplane_id": xxx (must)
#           "current_fuel_volume": xxx} (must, if do not need change, input"") example: 1/-1
#           "is_current_airplane": xxx} (must, if do not need change, input"")
#         }
# @zzyApp.route("/updatePlayerAirplane")
# def updatePlayerAirplane():
#     param_value = g.get("paramToBack", None);
#     player_id = param_value['player_id'];
#     airplane_id = param_value['airplane_id'];
#     current_fuel_volume = param_value['current_fuel_volume'];
#     is_current_airplane = param_value['is_current_airplane'];
#
#     sql = (f"UPDATE player_airplane set "
#            f"current_fuel_volume = current_fuel_volume+{'0' if current_fuel_volume == '' else current_fuel_volume}, "
#            f"is_current_airplane = {'is_current_airplane' if is_current_airplane == '' else is_current_airplane} "
#            f"where player_id = {player_id} and airplane_id = {airplane_id}");
#     return db.oprateData(sql);

def updatePlayerAirplane(player_id, airplane_id, update_fuel_volume, is_current_airplane):
    sql = (f"UPDATE player_airplane set "
           f"current_fuel_volume = current_fuel_volume+{'0' if update_fuel_volume == '' else update_fuel_volume},"
           f"is_current_airplane = {'is_current_airplane' if is_current_airplane == '' else is_current_airplane} "
           f"where player_id = {player_id} and airplane_id = {airplane_id}");
    return db.oprateData(sql);

def getAirplaneByNotPlayer(player_id):
    sql = (
        f"select airplane_id,airplane_type_name,fuel_volume,fuel_per_kilo,airplane_pic, airplane_price from airplane a where a.airplane_id not in "
        f"(select pa.airplane_id from player_airplane pa left join player p on p.player_id = pa.player_id where p.player_id = {player_id})");
    result = db.getResultList(sql)
    return result;

def getPlayerAirplane(player_id):
    sql = f"select * from player_airplane where airplane_id = {player_id}";
    result = db.getResultList(sql)
    return result;


# @zzyApp.route("/checkFuelIsEnough")
# def checkFuelIsEnough():
#     param_value = g.get("paramToBack", None);
#     start_lon = param_value['start_lon'];
#     start_lat = param_value['start_lat'];
#     end_lon = param_value['end_lon'];
#     end_lat = param_value['end_lat'];
#     player_id = param_value['player_id'];
#     distance = claculateDistance(start_lon, start_lat, end_lon, end_lat)
#     sql = (f"select pa.current_fuel_volume, a.fuel_per_kilo from player_airplane pa "
#            f"left join airplane a on pa.airplane_id = a.airplane_id "
#            f"where pa.player_id = {player_id} and pa.is_current_airplane = 1");
#     res = db.getResultList(sql)
#     result = False if (res['current_fuel_volume'] / res['fuel_per_kilo']) < distance else True;
#     return {'result': result};

def checkFuelIsEnough(player_id, distance):
    sql = (f"select pa.current_fuel_volume, a.fuel_per_kilo from player_airplane pa "
           f"left join airplane a on pa.airplane_id = a.airplane_id "
           f"where pa.player_id = {player_id} and pa.is_current_airplane = 1");
    res = db.getResultList(sql)
    result = False if (res['current_fuel_volume'] / res['fuel_per_kilo']) < distance else True;
    return result;

def getFuelPerKilo(player_id):
    sql = (f"select pa.current_fuel_volume, a.fuel_per_kilo from player_airplane pa "
           f"left join airplane a on pa.airplane_id = a.airplane_id "
           f"where pa.player_id = {player_id} and pa.is_current_airplane = 1");
    res = db.getResultList(sql)
    return res;



def getVersionTaskFromUserTask(player_id, version):
    sql = f"WITH RankedTasks AS ( SELECT a.player_id, a.task_id, a.is_complete, b.task_name, b.task_first_location, b.start, b.end, b.task_team_sign, b.task_amount, b.task_mileage, b.task_content, b.task_sort, b.version, b.next_task, b.before_task, ROW_NUMBER() OVER (PARTITION BY b.task_team_sign ORDER BY b.task_sort) AS RowNum FROM player_task a LEFT JOIN task b ON a.task_id = b.task_id WHERE a.player_id = {player_id} and b.version = {version} ) SELECT player_id, task_id, is_complete, task_name, task_first_location, start, end, task_team_sign, task_amount, task_mileage, task_content, task_sort, version, next_task, before_task FROM RankedTasks WHERE RowNum = 1";
    res = db.getResultList(sql)
    return res;


# Calculate distance
def claculateDistance(start_lon, start_lat, end_lat, end_lon):
    fromLat = start_lat
    fromLog = start_lon
    toLat = end_lat
    toLlog = end_lon
    fromAirport = (fromLat, fromLog);
    # Arrival airport latitude and longitude in mission
    toAirport = (toLat, toLlog);
    # Get distance from two airports by latitude and longitude
    distanceCount = distance.distance(fromAirport, toAirport).kilometers;
    return distanceCount;


# @zzyApp.route("/checkUserInfo")
# def checkUserInfo():
#     param_value = g.get("paramToBack", None)
#     player_name = param_value['player_name']
#     sql =  f"select a.player_id, a.player_name,a.player_pic,a.current_location,a.current_amount,a.current_mileage,a.current_version,b.airplane_id,b.current_fuel_volume,c.airplane_id,c.airplane_type_name,c.fuel_per_kilo,c.fuel_volume,c.airplane_pic from player a left join  player_airplane b on a.player_id=b.player_id left join airplane c on b.airplane_id=c.airplane_id WHERE a.player_name='{player_name}'"
#     res = db.getResultList(sql)
#     return {"result": res}

def checkUserInfo(player_name, player_id):
    sql =  f"select a.player_id, a.player_name,a.player_pic,a.current_location,a.current_amount,a.current_mileage,a.current_version,b.airplane_id,b.current_fuel_volume,c.airplane_id,c.airplane_type_name,c.fuel_per_kilo,c.fuel_volume,c.airplane_pic from player a left join  player_airplane b on a.player_id=b.player_id left join airplane c on b.airplane_id=c.airplane_id WHERE a.player_name='{player_name}' ";
    if (player_id != ''):
        sql +=f"a.player_id='{player_id}'"
    res = db.getResultList(sql)
    return res


def taskGroupAndsort(taskList):
    if(taskList):
        sorted = sorted(taskList, key=lambda x: (x["task_team_sign"], x["task_sort"]))
        grouped = {key: list(group) for key, group in groupby(sorted, key=lambda x: x["task_team_sign"])}
        taskList = {key: min(group, key=lambda x: x["task_sort"]) for key, group in grouped.items()}
    return taskList;