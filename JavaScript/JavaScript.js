async function initMap() {
    // 创建一个地图对象
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50, lng: 50}, // 设置初始中心点的经纬度
        zoom: 8, // 设置缩放级别
        minZoom: 3,
        maxZoom: 5,
        mapTypeId: 'satellite',
    });

    // Get airPorts
    const a = await asynchronousFunction()
    for (let i = 0; i < a.length; i++) {
        // 在地图上添加标记
        const marker = new google.maps.Marker({
            position: {lat: parseFloat(a[i].lat_deg), lng: parseFloat(a[i].lon_deg)}, // 设置标记的经纬度
            map: map,
            title: a[i].airport_name // 可选的标记标题
        });
    }

    // Set costume markers
    setMarkers(map);
}


// Get airports json from python
async function asynchronousFunction() {
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



// ----------------------------------------------------------------------------------------------------------
// Set custom markers on the map. Can be used to display planes and task marks.

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const beaches = [
["Bondi Beach", -33.890542, 151.274856, 4],
["Coogee Beach", -33.923036, 151.259052, 5],
["Cronulla Beach", -34.028249, 151.157507, 3],
["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
["Maroubra Beach", -33.950198, 151.259302, 1],
];

function setMarkers(map) {
// Adds markers to the map.
// Marker sizes are expressed as a Size of X,Y where the origin of the image
// (0,0) is located in the top left of the image.
// Origins, anchor positions and coordinates of the marker increase in the X
// direction to the right and in the Y direction down.
const image = {
  src: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  // This marker is 20 pixels wide by 32 pixels high.
  size: new google.maps.Size(20, 32),
  // The origin for this image is (0, 0).
  origin: new google.maps.Point(0, 0),
  // The anchor for this image is the base of the flagpole at (0, 32).
  anchor: new google.maps.Point(0, 32),
};
// Shapes define the clickable region of the icon. The type defines an HTML
// <area> element 'poly' which traces out a polygon as a series of X,Y points.
// The final coordinate closes the poly by connecting to the first coordinate.
const shape = {
  coords: [1, 1, 1, 20, 18, 20, 18, 1],
  type: "poly",
};

for (let i = 0; i < beaches.length; i++) {
  const beach = beaches[i];

  new google.maps.Marker({
    position: { lat: beach[1], lng: beach[2] },
    map,
    icon: image,
    shape: shape,
    title: beach[0],
    zIndex: beach[3],
  });
}
}

// window.initMap = initMap;