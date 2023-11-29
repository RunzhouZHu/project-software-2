# Game properties
from Python.DatabaseConnection import getResultList


# Class of player
# -------------------------------------------------------------------
class Player:
    sql = "select current_location from player;"
    current_location = getResultList(sql)[0][0]

    def __init__(self, id, fuel):
        self.fuel = fuel
        self.current_location = self.current_location

    def fly(self, destination):
        pass


player1 = Player(1, 1000)
player1.current_location = "ZWWW"


# ---------------------------------------------------------------
# Tool class
class Tool():
    @staticmethod
    def location_finder(ICAO):
        sql = "select lat_deg, lon_deg from airport where airport_ident = '" + ICAO + "';"
        result = getResultList(sql)[0]
        return result


a = Tool.location_finder("ZWWW")
print(a)