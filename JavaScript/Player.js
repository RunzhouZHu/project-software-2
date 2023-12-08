// fly
function fly(lat,lon,playerMarker,player_location,map)
{
}

// Open confirm window
function flyConfirm()
{
    const flyConfirm = document.getElementById('fly_confirm')



}

//Display player info

async function initialPlayerInfo() {
    const player_js = await getAPI('http://127.0.0.1:5000/player_info', "player_info")

    const player_name = document.getElementById("player_name")
    const player_money = document.getElementById("player_money")
    const player_fuel = document.getElementById("player_fuel")

    //<li id="player_name">Name: heheda</li>
    //<li id="player_money">Money: 1000</li>
    //<li id="player_fuel">Fuel: 1000</li>
    console.log(player_js.player_name)
    player_name.innerText = "Name: " + player_js.player_name
    player_money.innerText = "Money: " + player_js.current_amount
    player_fuel.innerText = "Fuel: " + player_js.current_mileage
}
