# Game properties
from Python.DatabaseConnection import getResultList


# -------------------------------------------------------------------
class Player:
    sql = "select current_location from player;"
    current_location = getResultList(sql)[0][0]

    def __init__(self, id, fuel):
        self.fuel = fuel
        self.current_location = self.current_location

    def fly(self, destination):
        pass


# --------------------------------------------------------------
# test
player1 = Player(1, 1000)
a = player1.current_location
print(a)
