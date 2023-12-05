import json
from flask import Flask
import Python.configration.DatebaseConnectionBySQLAlchemy as db
import jsonpickle as jsons
from flask import Blueprint,g

selfApp = Blueprint('selfApp', __name__)
#
@selfApp.route('/dd')
def other_route():
    param_value = g.get("paramToBack",None)
    return param_value

# @app.route("/ttt")
# def ttt():
#     t = {"1":2, "3":4};
#     return json.dumps(t);
#
# @app.route("/kk")
# def aaa():
#     t = {"1":2, "3":555};
#     return json.dumps(t);
#
# @app.route("/dd")
# def ddd():
#     t = db.getResultList("select * from airplane");
#     return jsons.dumps({"airport":t});


# @app.route("/update/<kk>")
# def kkk(kk):
#     print(kk);
#     kk = eval(kk);
#     print(kk['val']);


# t = db.oprateData(f"-- insert into airplane(airplane_type_name,fuel_volume, fuel_per_kilo) values({kk.name}, {kk.volume},9999)")
# return t;

# app.run(port=80);
