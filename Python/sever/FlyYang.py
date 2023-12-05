import json
from flask import Flask

import Python.configration.DatebaseConnectionBySQLAlchemy as db
import jsonpickle as jsons
from flask import Blueprint, g
yyApp = Blueprint('yyApp', __name__)

# @selfApp.route('/getUserPlane')
# def other_route():
#     param_value = g.get("paramToBack",None)
#     return param_value

# 查询用户飞机
# http://127.0.0.1/getUserPlane?paramToBack={%22player_id%22:1}
@yyApp.route("/getUserPlane")
def getUserPlane():
    param = g.get("paramToBack", None)
    res = db.getResultList(f"select * from player_airplane where player_id={param['player_id']}")
    return {"result": res}

# 查询用户信息
# http://127.0.0.1/getUserInfo?paramToBack={%22player_id%22:1,%22is_current_airplane%22:1}
@yyApp.route("/getUserInfo")
def gerUserInfo():
    param=g.get("paramToBack", None)
    res=db.getResultList(f"select a.player_id, a.player_name,a.player_pic,a.current_location,a.current_amount,a.current_mileage,a.current_version,b.airplane_id,b.current_fuel_volume,c.airplane_id,c.airplane_type_name,c.fuel_per_kilo,c.fuel_volume,c.airplane_pic from player a left join  player_airplane b on a.player_id=b.player_id left join airplane c on b.airplane_id=c.airplane_id WHERE a.player_id='{param['player_id']}' and b.is_current_airplane='{param['is_current_airplane']}'")
    return {"result": res}

# 插入新用户
# http://127.0.0.1/insertUser?paramToBack={%22player_name%22:%22yycs%22,%22player_pic%22:%22QQQQsdaQQQQQ%22}
@yyApp.route("/insertUser")
def insertUser():
    param = g.get("paramToBack", None)
    res=db.oprateData(f"INSERT into player(player_name,player_pic,current_location,current_amount,current_mileage,current_version) VALUE('{param['player_name']}','{param['player_pic']}',25,100000,0,1)")
    return {"result": res}

# 查询用户已接任务
# http://127.0.0.1/receiveTasks?paramToBack={"player_id":1,"task_id":""}
@yyApp.route("/receiveTasks")
def receiveTasks():
    param = g.get("paramToBack", None)
    playerId=param['player_id']
    taskId=param['task_id']
    res=db.getResultList(f"SELECT  a.player_id,a.task_id,a.is_complete,b.task_name,b.task_first_location,b.start,b.end,b.task_team_sign,b.task_amount,b.task_mileage,b.task_content,b.task_sort,b.version,b.next_task,b.before_task FROM player_task a left join task b on a.task_id=b.task_id where a.player_id={playerId} {'' if taskId == '' else f'and a.task_id={taskId}'}")
    return {"result": res}

# 查询用户未接任务
# http://127.0.0.1/unreciveTasks?paramToBack={"player_id":1}
@yyApp.route("/unreciveTasks")
def unreciveTasks():
    param = g.get("paramToBack", None)
    playerId=param['player_id']
    res=db.getResultList(f"select b.task_id,b.task_name,b.task_first_location,b.start,b.end,b.task_team_sign,b.task_amount,b.task_mileage,b.task_content,b.task_sort,b.version,b.next_task,b.before_task from task b where task_id not in (select task_id from player_task where player_id={playerId})")
    return {"result": res}
#

# 用户接任务
#http://127.0.0.1/takeTasks?paramToBack={"player_id":6,"task_id":1}
@yyApp.route("/takeTasks")
def takeTasks():
    param = g.get("paramToBack", None)
    playerId=param['player_id']
    taskId = param['task_id']
    res=db.oprateData(f"insert into player_task(task_id,player_id,is_complete) value({taskId},{playerId},0)")
    return {"result": res}


# 版本任务查询
#http://127.0.0.1/quryVersionTask?paramToBack={"version":1}
@yyApp.route("/quryVersionTask")
def quryVersionTask():
    param = g.get("paramToBack", None)
    version = param['version']
    res = db.getResultList(f"select * from task where version='{version}'")
    return {"result": res}

# 检查未接任务是否是当前城市
#http://127.0.0.1/checkStart?paramToBack={"current_id":321,"player_id":1}
@yyApp.route("/checkStart")
def checkStart():
    param = g.get("paramToBack", None)
    current_id = param['current_id']
    playerId=param['player_id']
    res = db.getResultList(f"select * from ( select *,if(start='{current_id}',true,false) as is_current from ( select *,row_number() over(partition by task_team_sign order by task_sort) as rank from task where task_id in (select task_id  from task where task_id not in (select task_id from player_task where player_id='{playerId}')))b where rank=1)a where is_current=true")
    return {"result": res}


# @yyApp.route("/querTask")
# def insertUser():
#     param = g.get("paramToBack", None)


