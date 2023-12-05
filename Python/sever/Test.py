import json
from flask import Flask
import Python.configration.DatebaseConnectionBySQLAlchemy as db
import jsonpickle as jsons

app = Flask(__name__);


@app.route("/ss")
def ttt():
    t = {"1":2, "3":4};
    return json.dumps(t);

@app.route("/kk")
def aaa():
    t = {"1":2, "3":555};
    return json.dumps(t);

@app.route("/dd")
def ddd():
    t = db.getResultList("select * from airplane");
    return jsons.dumps({"airport":t});

@app.route("/update")
def kkk():
    t = db.oprateData("insert into airplane(airplane_type_name,fuel_volume, fuel_per_kilo) values('name111', 9999,9999)")
    return t;

app.run(port=80);
