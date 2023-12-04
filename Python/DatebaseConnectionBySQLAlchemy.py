import GetPropertiesHandler as p
import os
from sqlalchemy import create_engine
path = os.path.join('../config', 'mysql.properties');
properties = p.getProperties(path);
engine = create_engine(f'sqlite:///{properties.get("database")}.db');


engine = create_engine(f'mysql://username:password@{properties.get("host")}:{properties.get("port")}/{properties.get("database")}');

connection = engine.connect();
def getResultList(sql):
    return connection.execute(sql);


def oprateData(sql):
    connection.execute(sql);
    connection.commit();
