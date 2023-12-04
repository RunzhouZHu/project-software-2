import json
from flask import Flask, request, Response, render_template
import Python.DatebaseConnectionBySQLAlchemy as db
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
    t = db.getResultList("select * from airport");
    return jsons.dumps({"airport":t});

app.run(port=80);
