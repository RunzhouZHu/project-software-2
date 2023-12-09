import json

from flask import Flask, Response
from flask_cors import CORS

from Python.Classes import Tool
from Python.DatabaseConnection import getResultList

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


# Get airports
@app.route('/Airports')
def airports():
    sql = "select airport_id, airport_name, lat_deg, lon_deg, airport_ident from airport;"
    result = getResultList(sql)
    response = []
    for i in result:
        a = {
            "airport_id": i[0],
            "airport_name": i[1],
            "lat_deg": str(i[2]),
            "lon_deg": str(i[3]),
            "ICAO": str(i[4])
        }
        response.append(a)
    json_response = json.dumps(response)

    return json_response


# Get player info
@app.route('/player_info/<player_id>')
def player_info(player_id):
    sql = "select player_id,player_name,player_pic, current_location, current_amount, current_mileage from player where player_id = " + player_id + ";"
    result = getResultList(sql)
    player_id = result[0][0]
    player_name = result[0][1]
    player_pic = result[0][2]
    current_location = result[0][3]
    current_amount = result[0][4]
    current_mileage = result[0][5]

    response = {
        "player_id": player_id,
        "player_name": player_name,
        "player_pic": player_pic,
        "current_amount": current_amount,
        "current_mileage": current_mileage,
        "current_location": current_location,
        "deg": {
            "lat": str(Tool.location_finder(current_location)[0]),
            "lon": str(Tool.location_finder(current_location)[1])
        }
    }
    json_response = json.dumps(response)

    return json_response


# Get received task id from database
@app.route('/getReceivedTaskId/<player_id>')
def getReceivedTasks(player_id):
    sql_received_task_id = "select task_id from player_task where player_id =" + str(player_id) + ";"
    received_task_id = getResultList(sql_received_task_id)

    return json.dumps(received_task_id)


# Get unreceived tasks id from current location
@app.route('/getUnreceivedTaskId/<player_id>/<ICAO>')
def getUnreceivedTaskId(player_id, ICAO):
    sql_all_task_id = "select task_id from task where task_first_location = '" + str(ICAO) + "';"
    sql_player_task_id = "select task_id from player_task where player_id = " + str(player_id) + ";"

    all_task_id = getResultList(sql_all_task_id)
    player_task_id = getResultList(sql_player_task_id)

    if all_task_id is None:
        response = []
        json_response = json.dumps(response)
        return json_response
    else:
        unreceived_task_id = []
        for i in all_task_id[0]:
            if i not in player_task_id[0]:
                unreceived_task_id.append(i)

        if len(unreceived_task_id) == 0:
            response = []
            json_response = json.dumps(response)
            return json_response
        else:
            response = unreceived_task_id
            json_response = json.dumps(response)
            return json_response


# Get task
@app.route('/getTaskInfo/<task_id>')
def getTaskInfo(task_id):
    sql = ("select task_id, task_name, task_first_location, start, end, task_team_sign, task_amount, task_mileage, task_content, task_pic, task_sort, version, next_task, before_task from task" +
                " where task_id = '" + str(task_id) + "';")

    task_info = getResultList(sql)
    response = {
        "task_id": task_info[0][0],
        "task_name": task_info[0][1],
        "task_first_location": task_info[0][2],
        "start": task_info[0][3],
        "end": task_info[0][4],
        "task_team_sign": task_info[0][5],
        "task_amount": task_info[0][6],
        "task_mileage": task_info[0][7],
        "task_content": task_info[0][8],
        "task_pic": task_info[0][9],
        "task_sort": task_info[0][10],
        "version": task_info[0][11],
        "next_task": task_info[0][12],
        "before_task": task_info[0][13]
    }
    json_response = json.dumps(response)

    return json_response




# change player location
@app.route("/changePlayerLocation/<airportId>")
def changePlayerLocation(airportId):
    sqlFindId = "select airport_ident from airport where airport_id =" + airportId + ";"
    ICAO = getResultList(sqlFindId)[0][0]
    sql = "update player set current_location = '" + ICAO + "' where player_id = 1;"
    getResultList(sql)

    return "success"


@app.errorhandler(404)
def page_not_found(error_code):
    response = {
        "message": "Invalid endpoint",
        "status": 404
    }
    json_response = json.dumps(response)
    http_response = Response(response=json_response, status=404, mimetype="application/json")
    return http_response


if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=5000)
