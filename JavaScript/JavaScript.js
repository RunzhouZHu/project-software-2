//Game initial
// Creat Map
async function initMap() {
    // 创建一个地图对象
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50, lng: 50}, // 设置初始中心点的经纬度

        // 限制缩放
        zoom: 4,
        minZoom: 3,
        maxZoom: 6,

        //
        mapTypeId: 'satellite',
    });

    //Initial data
    let player_location = await getAPI('http://127.0.0.1:5000/player_location', 'player location')
    //a for airports
    const a = await getAPI('http://127.0.0.1:5000/Airports', 'airports')

    // Set costume markers
    let playerMarker = setPlayerMark(map, player_location[0], player_location[1]);
    // Get airports and mark them on the map

    for (let i = 0; i < a.length; i++) {
        // 在地图上添加标记
        const marker = mapMarker(a[i].lat_deg, a[i].lon_deg, a[i].airport_name, map)
        const weather = await getWeather(a[i].lat_deg, a[i].lon_deg)

        // Create an info window to share between markers.
        const info = "<h3>" + a[i].airport_name + "</h3>" +
            "<p>" + 'ICAO: ' + a[i].ICAO + "</p>" +
            "<p>" + 'distance: ' + "</p>" +
            "<p>" + 'consume: ' + "</p>" +
            "<p>" + 'weather: ' + weather + "</p>"

        const infoWindow = new google.maps.InfoWindow({
            content: info,
        });

        // Add marker info window listener, 明明Google自己的网页里用的就是这个方法，为啥显示弃用了呢？？（＃￣～￣＃）
        marker.addListener('mouseover', () => {

            infoWindow.open(marker.getMap(), marker);
        })

        marker.addListener('mouseout', () => {
            infoWindow.close();
        })

        //
        marker.addListener('click', function (evt) {
            playerMarker.setMap(null)
            playerMarker = setPlayerMark(map, a[i].lat_deg, a[i].lon_deg)

            map.panTo({lat: parseFloat(a[i].lat_deg), lng: parseFloat(a[i].lon_deg)})
            map.setZoom(6)
        })
    }
}

// Initial Shop
shopInitial()