import Python.configration.DatebaseConnectionBySQLAlchemy as db
from flask import Blueprint, g
from geopy import distance

from Python.sever.FlyYang import *
from Python.sever.FlyZzy import *

btfApp = Blueprint('btfApp', __name__)
#http://127.0.0.1:80/login?paramToBack={'player_name':"zzy", "player_pic":""}
#http://127.0.0.1:80/login?paramToBack={'player_name':'zzz', "player_pic":'zzz'}
@btfApp.route("/login")
def login():
    param_value = g.get("paramToBack", None);
    player_name = param_value['player_name'];
    player_pic = param_value['player_pic'];
    userInfos = checkUserInfo(player_name,"");
    if(not userInfos):
        insertUser(player_name, player_pic);
        userInfos = checkUserInfo(player_name,"");
    userTasks = receiveTasks(userInfos[0]['player_id'], "");
    result = {'userInfos':userInfos, 'userTasks':userTasks}
    return {'result':result, "result_code": 1}

#http://127.0.0.1/experienceNow?paramToBack={'player_id':1, "version":"v2"}
@btfApp.route("/experienceNow")
def experienceNow():
    param = g.get("paramToBack", None)
    playerId = param['player_id']
    version = param['version']
    res = getVersionTaskFromUserTask(playerId, version);
    if(not res):
        res = quryVersionTask(version);
    result = taskGroupAndsort(res);
    return {"result":result, "result_code": 1}

# 查询用户已接任务
# http://127.0.0.1/receiveTasks?paramToBack={"player_id":1,"task_id":""}
# @btfApp.route("/receiveTasks")
# def receiveTasks():
#     param = g.get("paramToBack", None)
#     playerId = param['player_id']
#     taskId = param['task_id'];
#     res = receiveTasks(playerId, taskId);
#     return {"result": res, "result_code": 1}





@btfApp.route("/fly")
def fly():
    param_value = g.get("paramToBack", None);
    start_lon = param_value['start_lon'];
    start_lat = param_value['start_lat'];
    end_lon = param_value['end_lon'];
    end_lat = param_value['end_lat'];
    player_id = param_value['player_id'];
    airplane_id = param_value['airplane_id'];
    current_location = str(param_value['current_location']);
    distance = claculateDistance(start_lon, start_lat, end_lon, end_lat)
    res = checkFuelIsEnough(player_id, distance);
    if(res):
        fuelPerKilo = getFuelPerKilo(player_id)
        update_fuel_volume = 0-(distance * fuelPerKilo)
        updatePlayerAirplane(player_id, airplane_id, update_fuel_volume, 1)
        updatePlayer(player_id, current_location, "", "");
        return {"result": "arrived", "result_code": 1}
    else:
        return {"result": "fuel is not enough", "result_code": 0}


@btfApp.route("/updatePlayerInfo")
def updatePlayerInfo():
    param_value = g.get("paramToBack", None);
    player_id = param_value['player_id'];
    task_amount = param_value['task_amount'];
    player_pic = param_value['player_pic'];
    sql = (f"UPDATE player set "
           f"current_amount = current_amount+{'0' if task_amount == '' else task_amount}"
           f" {'' if player_pic == '' else f',player_pic = {player_pic}'}"
           f" where player_id ={player_id}");
    return db.oprateData(sql);


@btfApp.route("/updateCurrentFule")
def updateCurrentFule():
    param_value = g.get("paramToBack", None);
    player_id = param_value['player_id'];
    airplane_id = param_value['airplane_id'];
    res = update_fuel_volume = param_value['update_fuel_volume'];
    res = updatePlayerAirplane(player_id, airplane_id, update_fuel_volume, 1);
    return {"result": "success", "result_code": 0}



# http://127.0.0.1/checkPlayerTaskEndIsCurrentAirportId?paramToBack={'player_id': 1, 'airport_id': 1}
@btfApp.route("/checkPlayerTaskEndIsCurrentAirportId")
def checkPlayerTaskEndIsCurrentAirportId():
    param_value = g.get("paramToBack", None);
    player_id = param_value['player_id'];
    airport_id = param_value['airport_id'];
    sql = f"WITH RankedTasks AS ( SELECT a.player_id, a.task_id, a.is_complete, b.task_name, b.task_first_location, b.start, b.end, b.task_team_sign, b.task_amount, b.task_mileage, b.task_content, b.task_sort, b.version, b.next_task, b.before_task, ROW_NUMBER() OVER (PARTITION BY b.task_team_sign ORDER BY b.task_sort) AS RowNum FROM player_task a LEFT JOIN task b ON a.task_id = b.task_id WHERE a.player_id = {player_id} ) SELECT player_id, task_id, is_complete, task_name, task_first_location, start, end, task_team_sign, task_amount, task_mileage, task_content, task_sort, version, next_task, before_task FROM RankedTasks WHERE RowNum = 1;";
    res = db.getResultList(sql)
    result = [];
    for i in res:
        if i['end'] == airport_id:
            result.append(i);
    return {'result': result};

# 检查未接任务是否是当前城市
# http://127.0.0.1/checkStart?paramToBack={"current_id":321,"player_id":1}
@btfApp.route("/checkCurrentAirPlaneTaskStart")
def checkCurrentAirPlaneTaskStart():
    param = g.get("paramToBack", None)
    current_id = param['current_id']
    playerId = param['player_id']
    res = checkStart(current_id, playerId);
    return {"result": res}


@btfApp.route("/updatePlayerTask")
def updatePlayerTask():
    param_value = g.get("paramToBack", None);
    player_id = param_value['player_id'];
    task_id = param_value['task_id'];

    sql = f"UPDATE player_task set is_complete = 1 where player_id ={player_id} and task_id={task_id}";
    return db.oprateData(sql);


# 用户接任务
# http://127.0.0.1/takeTasks?paramToBack={"player_id":6,"task_id":1}
@btfApp.route("/takeTasks")
def takeTasks():
    param = g.get("paramToBack", None)
    playerId = param['player_id']
    taskId = param['task_id']
    res = db.oprateData(f"insert into player_task(task_id,player_id,is_complete) value({taskId},{playerId},0)")
    return res

# http://127.0.0.1/shopPlanePage?paramToBack={"player_id":1}
@btfApp.route("/shopPlanePage")
def shopPlanePage():
    param = g.get("paramToBack", None)
    playerId = param['player_id']
    result = getAirplaneByNotPlayer(playerId)
    return {'result': result};



@zzyApp.route("/playerAirplanseStore")
def playerAirplanseStore(player_id):
    param = g.get("paramToBack", None)
    playerId = param['player_id']
    result = getPlayerAirplane(playerId);
    return {'result': result};


# 查询用户未接任务
# http://127.0.0.1/unreciveTasks?paramToBack={"player_id":1}
@yyApp.route("/getPlayerUnreciveTasks")
def getPlayerUnreciveTasks():
    param = g.get("paramToBack", None)
    playerId = param['player_id']
    res = unreciveTasks(playerId);
    return {"result": res}


@yyApp.route("/getUserInfo")
def gerUserInfo():
    param = g.get("paramToBack", None)
    res = db.getResultList(
        f"select a.player_id, a.player_name,a.player_pic,a.current_location,a.current_amount,a.current_mileage,a.current_version,b.airplane_id,b.current_fuel_volume,c.airplane_id,c.airplane_type_name,c.fuel_per_kilo,c.fuel_volume,c.airplane_pic from player a left join  player_airplane b on a.player_id=b.player_id left join airplane c on b.airplane_id=c.airplane_id WHERE a.player_id='{param['player_id']}' and b.is_current_airplane='{param['is_current_airplane']}'")
    return {"result": res}



# 查询用户飞机
# http://127.0.0.1/getUserPlane?paramToBack={"player_id":1}
@yyApp.route("/getUserPlane")
def getUserPlane():
    param = g.get("paramToBack", None)
    sql = f"select * from player_airplane where player_id={param['player_id']}"
    res = db.getResultList(sql)
    return {"result": res}

