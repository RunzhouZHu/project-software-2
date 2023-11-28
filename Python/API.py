import mysql.connector
import json
from flask import Flask, Response
from flask_cors import CORS

connection = mysql.connector.connect(
    host='127.0.0.1',
    port=3306,
    database='hhd',
    user='root',
    password='hhdhhdhhd',
    autocommit=True
)

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/Airports')
def airports():
    sql = "select airport_name, lat_deg, lon_deg from airport_flight_game;"
    cursor = connection.cursor()
    cursor.execute(sql)
    result = cursor.fetchall()
    response = []

    for i in result:
        a = {
            "airport_name": i[0],
            "lat_deg": str(i[1]),
            "lon_deg": str(i[2])
        }
        response.append(a)
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
