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


// 计算距离
/** 计算两个点(经纬度)的距离
 * @param startDot 开始点的经纬度(lng.经度 lat.纬度)
 * @param endDot 结束点的经纬度(lng.经度 lat.纬度)
 * @returns {{originVal: string, mVal: string, kmVal: string}} originVal.原始值单位为米
 */
function calcCoordsDistance(startDot, endDot) {
  if (!startDot || !endDot) {
    return { mVal: "", kmVal: "", originVal: "两点的经纬度为必传" };
  }
  const earthRadius = 6378137.0, // 地球半径
    PI = Math.PI, // 圆周率π
    startRadianLat = getRadian(startDot.lat), // 纬度 - 开始
    endRadianLat = getRadian(endDot.lat), // 纬度 - 结束
    latDiffVal = startRadianLat - endRadianLat, // 维度差值
    lngDiffVal = getRadian(startDot.lng) - getRadian(endDot.lng), // 经度差值
    latDiffSinVal = Math.sin(latDiffVal / 2), // 维度差值的正弦值
    lngDiffSinVal = Math.sin(lngDiffVal / 2), // 经度差值的正弦值
    latCosProduct = Math.cos(startRadianLat) * Math.cos(endRadianLat), // 维度的余弦值乘积
    powVal = latCosProduct * Math.pow(lngDiffSinVal, 2),
    sqrtVal = Math.pow(latDiffSinVal, 2) + powVal, // 开平方根的值
    result = 2 * Math.asin(Math.sqrt(sqrtVal)) * earthRadius, // 结果值
    mUnit = result.toFixed(2) + "m", // 单位米
    kmUnit = (result / 1000).toFixed(5) + "km"; // 单位千米
  function getRadian(d) {
    return (d * PI) / 180.0;
  }
  return { mVal: mUnit, kmVal: kmUnit, originVal: result.toString() };
}



