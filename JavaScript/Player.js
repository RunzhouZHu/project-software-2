//get play player info
async function getPlayerInfo(player_id) {
    const player = await getAPI('http://127.0.0.1:5000/player_info/' + player_id, "get player_info")

    Object.defineProperty(player, 'consumption', {
        value: 0,
        writable: true,
    });
    return player
}


//Display player info top left
function displayPlayerInfo(player) {
    const player_name = document.getElementById("player_name")
    const player_money = document.getElementById("player_money")

    //<li id="player_name">Name: heheda</li>
    //<li id="player_money">Money: 1000</li>
    //<li id="player_fuel">Fuel: 1000</li>
    player_name.innerText = "Name: " + player.player_name
    player_money.innerText = "Money: " + parseInt(player.current_amount)

}

//calculate fuel consumption
function calcFuelConsumption(shopList, distance)
{
    for (let i = 0; i < shopList.length; i++)
    {
        if (shopList[i].is_current_airplane === 1)
        {
            const consumption = parseFloat(shopList[i].fuel_per_kilo)  * parseFloat(distance.kmVal)
            return consumption
        }
    }
}


//really consume fuel


// Calculate distance
/** Calculate distance
 * @param startDot (lng.longitude lat.latitude)
 * @param endDot (lng.longitude lat.latitude)
 * @returns {{originVal: string, mVal: string, kmVal: string}}
 */
function calcCoordsDistance(startDot, endDot) {
  if (!startDot || !endDot) {
    return { mVal: "", kmVal: "", originVal: "No input" };
  }
  const earthRadius = 6378137.0,
    PI = Math.PI,
    startRadianLat = getRadian(startDot.lat),
    endRadianLat = getRadian(endDot.lat),
    latDiffVal = startRadianLat - endRadianLat,
    lngDiffVal = getRadian(startDot.lng) - getRadian(endDot.lng),
    latDiffSinVal = Math.sin(latDiffVal / 2),
    lngDiffSinVal = Math.sin(lngDiffVal / 2),
    latCosProduct = Math.cos(startRadianLat) * Math.cos(endRadianLat),
    powVal = latCosProduct * Math.pow(lngDiffSinVal, 2),
    sqrtVal = Math.pow(latDiffSinVal, 2) + powVal,
    result = 2 * Math.asin(Math.sqrt(sqrtVal)) * earthRadius,
    mUnit = result.toFixed(2) + "m",
    kmUnit = (result / 1000).toFixed(5) + "km";
  function getRadian(d) {
    return (d * PI) / 180.0;
  }
  return { mVal: mUnit, kmVal: kmUnit, originVal: result.toString() };
}



