async function initMap() {
    // 创建一个地图对象
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50, lng: 50}, // 设置初始中心点的经纬度

        // 限制缩放
        zoom: 8,
        minZoom: 3,
        maxZoom: 5,

        //
        mapTypeId: 'satellite',
    });

    // Get airPorts
    const a = await getAirports()
    for (let i = 0; i < a.length; i++) {
        // 在地图上添加标记
        const marker = new google.maps.Marker({
            position: {lat: parseFloat(a[i].lat_deg), lng: parseFloat(a[i].lon_deg)}, // 设置标记的经纬度
            map: map,
            title: a[i].airport_name, // 可选的标记标题
            zIndex: 3// Z轴位置，是否显示在其他元素上层
        });
    }

    // Set costume markers
    setPlayerMark(map);
}


// Get airports json from python
async function getAirports() {
    console.log('asynchronous download begins');
    try {
        const response = await fetch('http://127.0.0.1:5000/Airports');
        return await response.json()
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('asynchronous load complete');
    }
}

//window.initMap = initMap;