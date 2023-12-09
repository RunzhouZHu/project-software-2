from flask import json

from Python.DatabaseConnection import getResultList


def shop(playerId):
    sql_all_planes = "select airplane_id, airplane_type_name, fuel_volume, fuel_per_kilo, airplane_pic, airplane_price from airplane;"
    sql_player_planes = "select player_id, airplane_id, current_fuel_volume, is_current_airplane from player_airplane where player_id = '" + str(playerId) + "';"

    all_planes = getResultList(sql_all_planes)
    player_planes = getResultList(sql_player_planes)

    planes = []

    for i in all_planes:
        plane = {
            "airplane_id": i[0],
            "airplane_type_name": i[1],
            "fuel_volume": i[2],
            "fuel_per_kilo": i[3],
            "airplane_pic": i[4],
            "airplane_price": i[5],
            "current_fuel_volume": 0,
            "is_current_airplane": 0,
            "is_players": 0
        }

        for j in player_planes:
            if j[1] == plane["airplane_id"]:
                plane["current_fuel_volume"] = j[2]
                plane["is_players"] = 1

        planes.append(plane)

    response = planes
    json_response = json.dumps(response)
    return json_response


a = shop(1)

print(a)
