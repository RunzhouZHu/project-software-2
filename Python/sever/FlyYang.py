import json
from flask import Flask
import Python.configration.DatebaseConnectionBySQLAlchemy as db
import jsonpickle as jsons
from flask import Blueprint,g

selfApp = Blueprint('selfApp', __name__)

# @selfApp.route('/getUserPlane')
# def other_route():
#     param_value = g.get("paramToBack",None)
#     return param_value

@selfApp.route("/getUserPlane")
def getUserPlane():
    playerId = g.get("paramToBack", None)
    userPlane = db.getResultList(f"select * from player_airplane where player_id={playerId['player_id']}")
    return jsons.dumps({"result": userPlane})




