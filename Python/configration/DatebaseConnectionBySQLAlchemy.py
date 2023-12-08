import os
from Python.configration import GetPropertiesHandler as p
import jsonpickle as jsons
import pymysql
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

path = os.path.join('../../config/mysql.properties');
properties = p.getProperties(path);

# engine= create_engine("mysql+pymysql://root:123456@localhost:3306/flight_game",echo=True)
engine= create_engine(f'mysql+pymysql://{properties.get("user")}:{properties.get("password")}@{properties.get("host")}:{properties.get("port")}/{properties.get("database")}',echo=True)
Session = sessionmaker(bind=engine)
session = Session();
# engine = create_engine(f'sqlite:///{properties.get("database")}.db');
# engine=create_engine("mysql+pymysql://root:123456@localhost:3306/test",echo=True)
# engine = create_engine(f'mysql+pymysql://{properties.get("user")}:{properties.get("password")}@{properties.get("host")}:{properties.get("port")}/{properties.get("database")}',echo=True);

connection = engine.connect();
def getResultList(sql):
    try:
        result = engine.execute(sql);
        keys = result.keys();
        results = [dict(zip(keys, val)) for val in result.fetchall()];
    except Exception as e:
        return jsons.dumps({"result":"error", "information": e})
    return results;


def oprateData(sql):
    try:
        connection.execute(sql);
        session.commit();
    except Exception as e:
        return jsons.dumps({"error":e});
    return jsons.dumps({"result":"success"});




# result = getResultList("select * from airport")
# keys = result.keys()
# values = list(result);
# results = [dict(zip(keys, val)) for val in values]
# print(results[0]['airport_id'])
# json_data = json.dumps(results)
# print(json_data);
# rows = session.query("select * from airport")
# json_result = json.dumps([dict(row) for row in rows])

