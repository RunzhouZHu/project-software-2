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

    //Initial player
    let player = await getPlayerInfo(1)
    console.log(player.consumption)
    displayPlayerInfo(player)

    //Shop
    let shop_list = await getShopList(player.player_id)
    // Initial Shop
    shopInitial(shop_list)
    shopFunction(shop_list, player)

    // Global parameter
    let fuel_price = 0.5

    refuel(player,shop_list, fuel_price)

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
    // Version task
    versionTaskInitial(unreceivedTaskList)
    showVersionTaskIcon()

    // Mark on the map
    const marker_list = []

    for (let i = 0; i < a.length; i++) {
        // Set marker on map
        const marker = mapMarker(a[i].lat_deg, a[i].lon_deg, a[i].airport_name, map)
        const weather = await getWeather(a[i].lat_deg, a[i].lon_deg)


        // Create an info window to share between markers.
        const infoWindow = new google.maps.InfoWindow()


        // Add marker info window listener
        marker.addListener('mouseover', () => {
            //calculate fuel consumption
            // calculate distance
            const startDot = {
                "lat": player.deg.lat,
                "lng": player.deg.lon
            }
            const endDot = {
                "lat": a[i].lat_deg,
                "lng": a[i].lon_deg
            }
            const distance = calcCoordsDistance(startDot, endDot)
            const fuelConsumption = calcFuelConsumption(shop_list,distance)

            infoWindow.setContent("<h3>" + a[i].airport_name + "</h3>" +
                "<p>" + 'ICAO: ' + a[i].ICAO + "</p>" +
                "<p>" + 'distance: ' + String(parseInt(distance.kmVal)) + " km</p>" +
                "<p>" + 'consume: ' + String(parseInt(fuelConsumption)) + "</p>" +
                "<p>" + 'weather: ' + weather + "</p>")

            infoWindow.open(marker.getMap(), marker);
            })

        marker.addListener('mouseout', () => {
            infoWindow.close();
            })

        marker_list.push(marker)
    }

    function markerFinder(){
        for (let i = 0; i< marker_list.length; i++)
        {
            marker_list[i].addListener('click', function markerFinder (evt){
                console.log("The marker is " + i)
                return i
            })
        }
    }

    markerFinder()

    for (let i = 0; i < marker_list.length; i++) {
        marker_list[i].addListener('click', async function (evt) {

            // calculate fuel consumption
            // calculate distance
            const startDot = {
                "lat": player.deg.lat,
                "lng": player.deg.lon
            }
            const endDot = {
                "lat": a[i].lat_deg,
                "lng": a[i].lon_deg
            }
            const distance = calcCoordsDistance(startDot, endDot)
            const fuelConsumption = calcFuelConsumption(shop_list,distance)

            const flyConfirm = document.getElementById('fly_confirm')
            flyConfirm.style.display = 'block'
            const flyConfirmInfo = document.createElement('article')
            flyConfirmInfo.innerHTML = "<p>" + a[i].airport_name + "</p>" +
                "<p>" + String(parseInt(distance.kmVal))  + " KM</p>" +
                "<p>Consumption: " + String(parseInt(fuelConsumption)) + "</p>"


            flyConfirm.appendChild(flyConfirmInfo)

            let flyConfirmYes = document.getElementById('flyConfirmYes')
            let flyConfirmNo = document.getElementById('flyConfirmNo')

            flyConfirmYes.addEventListener('click', async function (evt) {
                flyConfirm.style.display = 'none'
                flyConfirmInfo.innerHTML = ''

                // fly and consume fuel
                // calculate fuel consumption
                // calculate distance
                const startDot = {
                    "lat": player.deg.lat,
                    "lng": player.deg.lon
                }
                const endDot = {
                    "lat": a[i].lat_deg,
                    "lng": a[i].lon_deg
                }
                const distance = calcCoordsDistance(startDot, endDot)
                const fuelConsumption = calcFuelConsumption(shop_list,distance)

                for (let m = 0; m < shop_list.length; m++)
                {
                    if (shop_list[m].is_current_airplane === 1)
                    {
                        if (shop_list[m].current_fuel_volume > fuelConsumption)
                        {
                            shop_list[m].current_fuel_volume = parseFloat(shop_list[m].current_fuel_volume) - parseFloat(fuelConsumption)
                            displayFuel(shop_list[m].current_fuel_volume, shop_list[m].fuel_volume)

                            // Update player marker and move cam
                            playerMarker.setMap(null)
                            playerMarker = setPlayerMark(map, a[i].lat_deg, a[i].lon_deg)

                            map.panTo({lat: parseFloat(a[i].lat_deg), lng: parseFloat(a[i].lon_deg)})
                            map.setZoom(6)

                            //Update player info
                            player.current_location = a[i].ICAO
                            player.deg.lat = a[i].lat_deg
                            player.deg.lon = a[i].lon_deg

                             //Tasks
                            for (let j = 0; j < unreceivedTaskList.length; j++) {
                                for (let k = 0; k < finishedTaskList.length; k++) {
                                    for (let l = 0; l < receivedTaskList.length; l++) {
                                        // bool flag
                                        //
                                        const continueTask1 = unreceivedTaskList[j].task_first_location === a[i].ICAO
                                        const continueTask2 = finishedTaskList[k].task_team_sign === unreceivedTaskList[j].task_team_sign
                                        const continueTask3 = finishedTaskList[k].task_id === unreceivedTaskList[j].before_task

                                        //New task
                                        const newTask1 = unreceivedTaskList[j].task_first_location === a[i].ICAO
                                        const newTask2 = unreceivedTaskList[j].before_task === 0

                                        if ((continueTask1 && continueTask2)||(newTask1 && newTask2))
                                        {
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
                                            const taskFinish = receivedTaskList[l]
                                            receivedTaskList = listMinus(receivedTaskList, taskFinish)
                                            finishedTaskList.push(taskFinish)
                                            player.current_amount = player.current_amount + taskFinish.task_amount
                                            showTaskBonusWindow(taskFinish.task_amount)
                                            displayPlayerInfo(player)
                                        }
                                    }
                                }
                            }


                            for (let j = 0; j < unreceivedTaskList.length; j++) {
                                for (let k = 0; k < finishedTaskList.length; k++) {
                                    for (let l = 0; l < receivedTaskList.length; l++) {
                                        // bool flag
                                        //
                                        const continueTask1 = unreceivedTaskList[j].task_first_location === a[i].ICAO
                                        const continueTask2 = finishedTaskList[k].task_team_sign === unreceivedTaskList[j].task_team_sign
                                        const continueTask3 = finishedTaskList[k].task_id === unreceivedTaskList[j].before_task

                                        //New task
                                        const newTask1 = unreceivedTaskList[j].task_first_location === a[i].ICAO
                                        const newTask2 = unreceivedTaskList[j].before_task === 0

                                        if ((continueTask1 && continueTask2)||(newTask1 && newTask2))
                                        {
                                            showTaskInfo(unreceivedTaskList[j])
                                            const taskTake = unreceivedTaskList[j]
                                            unreceivedTaskList = listMinus(unreceivedTaskList, taskTake)
                                            receivedTaskList.push(taskTake)
                                        }
                                    }
                                }
                            }

                            clearTaskList()
                            displayReceivedTasks(receivedTaskList)

                            //unreceivedTaskList.sort()
                            //receivedTaskList.sort()
                            //finishedTaskList.sort()
                            console.log(unreceivedTaskList)
                            console.log(receivedTaskList)
                            console.log(finishedTaskList)
                        }
                        else
                        {
                            alert("Not enough fuel.")
                        }
                    }
                }
                console.log(player.current_location)
                console.log(player.deg.lat)
                console.log(player.deg.lon)
            }, {once: true})

            flyConfirmNo.addEventListener('click', function (evt) {
                flyConfirm.style.display = 'none'
                flyConfirmInfo.innerHTML = ''
            }, {once: true})

            //remove listener

        }, {once: true})
    }
}
window.initMap = initMap;