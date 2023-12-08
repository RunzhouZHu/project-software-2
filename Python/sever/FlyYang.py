import json
from flask import Flask

import Python.configration.DatebaseConnectionBySQLAlchemy as db
import jsonpickle as jsons
from flask import Blueprint, g

yyApp = Blueprint('yyApp', __name__)




# 查询用户信息
# http://127.0.0.1/getUserInfo?paramToBack={"player_id":1,"is_current_airplane":1}



# 插入新用户
# http://127.0.0.1/insertUser?paramToBack={"player_name":"yycs","player_pic":"QQQQsdaQQQQQ"}
# @yyApp.route("/insertUser")
# def insertUser():
#     param = g.get("paramToBack", None)
#     res = db.oprateData(
#         f"INSERT into player(player_name,player_pic,current_location,current_amount,current_mileage,current_version) VALUE('{param['player_name']}','{param['player_pic']}',25,100000,0,1)")
#     return res

def insertUser(player_name, player_pic):
    res = db.oprateData(f"INSERT into player(player_name,player_pic,current_location,current_amount,current_mileage,current_version) VALUE({player_name},{player_pic},25,100000,0,1)")
    return res

# 查询用户已接任务
# http://127.0.0.1/receiveTasks?paramToBack={"player_id":1,"task_id":""}
# @yyApp.route("/receiveTasks")
# def receiveTasks():
#     param = g.get("paramToBack", None)
#     playerId = param['player_id']
#     taskId = param['task_id']
#     res = db.getResultList(f"SELECT  a.player_id,a.task_id,a.is_complete,b.task_name,b.task_first_location,b.start,b.end,b.task_team_sign,b.task_amount,b.task_mileage,b.task_content,b.task_sort,b.version,b.next_task,b.before_task FROM player_task a left join task b on a.task_id=b.task_id where a.player_id={playerId} {'' if taskId == '' else f'and a.task_id={taskId}'}")
#     return {"result": res}

def receiveTasks(playerId, taskId):
    res = db.getResultList(f"SELECT a.player_id,a.task_id,a.is_complete,b.task_name,b.task_first_location,b.start,b.end,b.task_team_sign,b.task_amount,b.task_mileage,b.task_content,b.task_sort,b.version,b.next_task,b.before_task FROM player_task a left join task b on a.task_id=b.task_id where a.player_id={playerId} {'' if taskId == '' else f'and a.task_id={taskId}'}")
    return res;


# 查询用户未接任务
# http://127.0.0.1/unreciveTasks?paramToBack={"player_id":1}
def unreciveTasks(player_id):
    res = db.getResultList(f"select b.task_id,b.task_name,b.task_first_location,b.start,b.end,b.task_team_sign,b.task_amount,b.task_mileage,b.task_content,b.task_sort,b.version,b.next_task,b.before_task from task b where task_id not in (select task_id from player_task where player_id={player_id})")
    return res


#

def checkStart(current_id, player_id):
    res = db.getResultList(
        f"select * from ( select *,if(start='{current_id}',true,false) as is_current from ( select *,row_number() over(partition by task_team_sign order by task_sort) as rank from task where task_id in (select task_id  from task where task_id not in (select task_id from player_task where player_id='{player_id}')))b where rank=1)a where is_current=true")
    return res


# 版本任务查询
# http://127.0.0.1/quryVersionTask?paramToBack={"version":1}
# @yyApp.route("/quryVersionTask")
# def quryVersionTask():
#     param = g.get("paramToBack", None)
#     version = param['version']
#     res = db.getResultList(f"select * from task where version='{version}'")
#     return {"result": res}

def quryVersionTask(version):
    res = db.getResultList(f"select * from task where version='{version}'")
    return res;



# @yyApp.route("/querTask")
# def insertUser():
#     param = g.get("paramToBack", None)
