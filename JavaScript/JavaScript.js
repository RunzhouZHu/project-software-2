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
    let receivedTaskId = await getReceivedTaskId(player.player_id)
    let receivedTaskList = await getTaskList(receivedTaskId)
    displayReceivedTasks(receivedTaskList)

    // Set costume markers
    let playerMarker = setPlayerMark(map, player.deg.lat, player.deg.lon);


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
                const distance = await calculateDistance(parseFloat(player.deg.lat), parseFloat(player.deg.lat), parseFloat(a[i].lat_deg), parseFloat(a[i].lat_deg))
                player = await getAPI('http://127.0.0.1:5000/player_info/1', 'player info')
                await flyUpdate(a[i].airport_id)

                //Task
                //check unreceived task
                const unReceivedTaskId = await getUnreceivedTaskId(player.player_id,player.current_location)
                const unReceivedTaskList = await getTaskList(unReceivedTaskId)
                console.log(unReceivedTaskList)
                if(unReceivedTaskList.length !== 0)
                {
                    for (let i=0;i<receivedTaskList.length;i++)
                    {
                        if (receivedTaskList[i].task_team_sign === unReceivedTaskList[0].task_team_sign && receivedTaskList[i].task_id === unReceivedTaskList[0].before_task)
                        {
                            showTaskInfo(unReceivedTaskList[0])
                        }
                        else
                        {
                            console.log("lllllllllllllllllllllllllllll")
                            console.log(receivedTaskList[i].task_id)
                            console.log(unReceivedTaskList[0].before_task)
                        }
                    }
                }
                else
                {
                    console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
                }

                //Take task
                await takeTask(player.player_id, unReceivedTaskId)

                receivedTaskId = await getReceivedTaskId(player.player_id)
                receivedTaskList = await getTaskList(receivedTaskId)
                displayReceivedTasks(receivedTaskList)

                //


            },{ once: true })

            flyConfirmNo.addEventListener('click', function (evt) {
                flyConfirm.style.display = 'none'
                flyConfirmInfo.innerHTML = ''
            }, { once: true })

            //remove listener

        }, { once: true })
    }


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

// Initial Shop
shopInitial()

window.initMap = initMap;