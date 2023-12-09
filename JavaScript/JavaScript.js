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

    //a for airports
    const a = await getAPI('http://127.0.0.1:5000/Airports', 'airports')


    //Initial data
    let player = await getAPI('http://127.0.0.1:5000/player_info/1', 'player info')
    await getPlayerInfo(1)

    //Tasks
    let receivedTaskList = await getReceivedTaskList(player.player_id)
    displayReceivedTasks(receivedTaskList)

    // Set costume markers
    let playerMarker = setPlayerMark(map, player.deg.lat, player.deg.lon);

    //Task
    // check unreceived task
    let unreceivedTaskList = await getUnreceivedTaskList(player.player_id)
    //check finished task
    let finishedTaskList = await getFinishedTaskList(player.player_id)

    //Shop
    const shop_list = await getShopList(player.player_id)


    // Mark on the map
    const marker_list = []

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

        // Add marker info window listener
        marker.addListener('mouseover', () => {

            infoWindow.open(marker.getMap(), marker);
        })

        marker.addListener('mouseout', () => {
            infoWindow.close();
        })

        marker_list.push(marker)
    }


    for (let i = 0; i < marker_list.length; i++) {
        marker_list[i].addListener('click', async function (evt) {
            const flyConfirm = document.getElementById('fly_confirm')
            flyConfirm.style.display = 'block'
            const flyConfirmInfo = document.createElement('article')
            flyConfirmInfo.innerHTML = "<p>" + a[i].airport_name + "</p>" +
                "<p>" + a[i].airport_name + "</p>" +
                "<p>" + a[i].airport_name + "</p>"


            flyConfirm.appendChild(flyConfirmInfo)

            let flyConfirmYes = document.getElementById('flyConfirmYes')
            let flyConfirmNo = document.getElementById('flyConfirmNo')

            flyConfirmYes.addEventListener('click', async function (evt) {
                flyConfirm.style.display = 'none'
                flyConfirmInfo.innerHTML = ''

                //Update player marker and move cam
                playerMarker.setMap(null)
                playerMarker = setPlayerMark(map, a[i].lat_deg, a[i].lon_deg)

                map.panTo({lat: parseFloat(a[i].lat_deg), lng: parseFloat(a[i].lon_deg)})
                map.setZoom(6)

                //Update player info
                player.current_location = a[i].ICAO
                player.deg.lat = a[i].lat_deg
                player.deg.lon = a[i].lon_deg

                console.log(player.current_location)
                console.log(player.deg.lat)
                console.log(player.deg.lon)


                //Task
                //check if task can take
                for (let j = 0; j < unreceivedTaskList.length; j++) {
                    for (let k = 0; k < finishedTaskList.length; k++) {
                        for (let l = 0; l < receivedTaskList.length; l++) {
                            if (unreceivedTaskList[j].task_first_location === a[i].ICAO && finishedTaskList[k].task_team_sign === unreceivedTaskList[j].task_team_sign) {
                                showTaskInfo(unreceivedTaskList[j])
                                const taskTake = unreceivedTaskList[j]
                                unreceivedTaskList = listMinus(unreceivedTaskList, taskTake)
                                receivedTaskList.push(taskTake)
                            }
                        }
                    }
                }
                for (let j = 0; j < unreceivedTaskList.length; j++) {
                    for (let k = 0; k < finishedTaskList.length; k++) {
                        for (let l = 0; l < receivedTaskList.length; l++) {
                            if (receivedTaskList[l].end === a[i].ICAO) {
                                console.log("LLLLLLLLLLLL")
                                const taskFinish = receivedTaskList[l]
                                receivedTaskList = listMinus(receivedTaskList, taskFinish)
                                finishedTaskList.push(taskFinish)
                            }
                        }
                    }
                }

                clearTaskList()
                displayReceivedTasks(receivedTaskList)

                unreceivedTaskList.sort()
                receivedTaskList.sort()
                finishedTaskList.sort()
                console.log(unreceivedTaskList)
                console.log(receivedTaskList)
                console.log(finishedTaskList)
                //
            }, {once: true})

            flyConfirmNo.addEventListener('click', function (evt) {
                flyConfirm.style.display = 'none'
                flyConfirmInfo.innerHTML = ''
            }, {once: true})

            //remove listener

        }, {once: true})

    }

    // Initial Shop
    console.log(shop_list)
    console.log(shop_list[1].airplane_text)
    shopInitial(shop_list)

    shopFunction(shop_list, player.player_id)


    // Move player check tasks


    /*
    for (let i = 0; i < marker_list.length; i++) {
        marker_list[i].addListener('click', async function (evt) {

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
                // Fly and Update player information

            })

            flyConfirmNo.addEventListener('click', function (evt) {
                flyConfirm.style.display = 'none'
                flyConfirmInfo.innerHTML = ''
            })
        })
    }
/*

    /*
            //
            marker.addListener('click', async function (evt) {

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
                    // Fly and Update player information

                })

                flyConfirmNo.addEventListener('click', function (evt) {
                    flyConfirm.style.display = 'none'
                    flyConfirmInfo.innerHTML = ''
                })
            })
    */


}






window.initMap = initMap;