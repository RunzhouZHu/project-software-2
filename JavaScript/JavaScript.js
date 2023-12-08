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
    let player_location = await getAPI('http://127.0.0.1:5000/player_info', 'player location')
    //a for airports
    const a = await getAPI('http://127.0.0.1:5000/Airports', 'airports')
    //Initial player info
    initialPlayerInfo()

    // Set costume markers
    let playerMarker = setPlayerMark(map, player_location.current_location.lat, player_location.current_location.lon);
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

            const flyConfirm = document.getElementById('fly_confirm')
            flyConfirm.style.display = 'block'

            const flyConfirmInfo = document.createElement('article')
            flyConfirmInfo.innerHTML = "<p>" + a[i].airport_name + "</p>" +
                "<p>" + a[i].airport_name + "</p>" +
                "<p>" + a[i].airport_name + "</p>"


            flyConfirm.appendChild(flyConfirmInfo)

            const flyConfirmYes = document.getElementById('flyConfirmYes')
            const flyConfirmNo = document.getElementById('flyConfirmNo')

            flyConfirmYes.addEventListener('click', function (evt) {
                flyConfirm.style.display = 'none'
                flyConfirmInfo.innerHTML = ''

                //Update player marker and move cam
                playerMarker.setMap(null)
                playerMarker = setPlayerMark(map, a[i].lat_deg, a[i].lon_deg)

                map.panTo({lat: parseFloat(a[i].lat_deg), lng: parseFloat(a[i].lon_deg)})
                map.setZoom(6)
                //
            })

            flyConfirmNo.addEventListener('click',function (evt) {
                flyConfirm.style.display = 'none'
                flyConfirmInfo.innerHTML = ''
            })
        })
    }
}

// Initial Shop
shopInitial()