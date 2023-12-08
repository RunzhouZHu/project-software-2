import json
from flask import Flask, Response
from flask_cors import CORS

from Python.Classes import player1, Tool
from Python.DatabaseConnection import getResultList

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


# Get airports
@app.route('/Airports')
def airports():
    sql = "select airport_name, lat_deg, lon_deg, airport_ident from airport;"
    result = getResultList(sql)
    response = []
    for i in result:
        a = {
            "airport_name": i[0],
            "lat_deg": str(i[1]),
            "lon_deg": str(i[2]),
            "ICAO": str(i[3])
        }
        response.append(a)
    json_response = json.dumps(response)

    return json_response


# Get player info
@app.route('/player_info')
def player_info():
    sql = "select player_id,player_name,player_pic, current_location, current_amount, current_mileage from player where player_id = 1;"
    result = getResultList(sql)
    player_id = result[0][0]
    player_name =result[0][1]
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
        "current_location": {
            "lat": str(Tool.location_finder(current_location)[0]),
            "lon": str(Tool.location_finder(current_location)[1])
        }
    }
    json_response = json.dumps(response)

    return json_response


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
