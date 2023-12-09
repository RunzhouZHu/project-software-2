// fly
function fly(airport, player, playerMarker, map) {
    const flyConfirm = document.getElementById('fly_confirm')
    flyConfirm.style.display = 'block'

    const flyConfirmInfo = document.createElement('article')
    flyConfirmInfo.innerHTML = "<p>" + airport.airport_name + "</p>" +
        "<p>" + airport.airport_name + "</p>" +
        "<p>" + airport.airport_name + "</p>"


    flyConfirm.appendChild(flyConfirmInfo)

    const flyConfirmYes = document.getElementById('flyConfirmYes')
    const flyConfirmNo = document.getElementById('flyConfirmNo')

    flyConfirmYes.addEventListener('click', async function (evt) {
        flyConfirm.style.display = 'none'
        flyConfirmInfo.innerHTML = ''

        //Update player marker and move cam
        playerMarker.setMap(null)
        playerMarker = setPlayerMark(map, airport.lat_deg, airport.lon_deg)

        map.panTo({lat: parseFloat(airport.lat_deg), lng: parseFloat(airport.lon_deg)})
        map.setZoom(6)

        //Update player info
        const distance = await calculateDistance(parseFloat(player.deg.lat), parseFloat(player.deg.lat), parseFloat(airport.lat_deg), parseFloat(airport.lat_deg))
        await flyUpdate(airport.airport_id)

    })

    flyConfirmNo.addEventListener('click', function (evt) {
        flyConfirm.style.display = 'none'
        flyConfirmInfo.innerHTML = ''})
}

// Fly and Update player information
async function flyUpdate(targetLocation) {
    await getAPI("http://127.0.0.1:5000/changePlayerLocation/" + targetLocation)
}


// Calculate distance
async function calculateDistance(start_lat, start_lon, end_lat, end_lon) {
    let result = await getAPI("http://127.0.0.1/calculateDistance?paramToBack={'start_lon':" + start_lon + ", 'start_lat':" + start_lon + ",'end_lon':" + end_lon + ", 'end_lat':" + end_lat + "}")
    return result.result
}


//Display player info
async function getPlayerInfo(player_id) {
    const player_js = await getAPI('http://127.0.0.1:5000/player_info/' + player_id, "player_info")

    const player_name = document.getElementById("player_name")
    const player_money = document.getElementById("player_money")
    const player_fuel = document.getElementById("player_fuel")

    //<li id="player_name">Name: heheda</li>
    //<li id="player_money">Money: 1000</li>
    //<li id="player_fuel">Fuel: 1000</li>
    player_name.innerText = "Name: " + player_js.player_name
    player_money.innerText = "Money: " + player_js.current_amount
    player_fuel.innerText = "Fuel: " + player_js.current_mileage
}
