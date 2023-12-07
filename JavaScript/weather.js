//"https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=75d2735cb3fbcc1bf21a88ba28aff09c

async function getWeather(lat, lon) {
    const weather = await getAPI(`https://api.openweathermap.org/data/2.5/weather?lat=${parseFloat(lat)}&lon=${parseFloat(lon)}&appid=75d2735cb3fbcc1bf21a88ba28aff09c`, 'weather')
    return weather.weather[0].description
}
