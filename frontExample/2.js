async function test(){
    let res = await fetch('http://127.0.0.1/checkPlayerTaskEndIsCurrentAirportId?paramToBack={"player_id": 1, "airport_id": 1}');
    let js = await res.json();
    console.log(js)
}



document.addEventListener('DOMContentLoaded', test);

