import json
from flask import Flask
import Python.configration.DatebaseConnectionBySQLAlchemy as db
import jsonpickle as jsons
from flask import Blueprint,g

zzyApp= Blueprint('zzyApp', __name__)

@zzyApp.route('/dd')
def other_route():
    param_value = g.get("paramToBack",None)
    return param_value


