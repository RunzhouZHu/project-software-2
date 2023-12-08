function mapMarker(lat, lon, title, map) {
    // 在地图上添加标记
    return new google.maps.Marker({
        position: {lat: parseFloat(lat), lng: parseFloat(lon)}, // 设置标记的经纬度
        map: map,
        title: title,
        zIndex: 3,
        lat: lat,
        lon: lon,

        label: {
            color: "#FFF",                //文本颜色
            fontSize: "10px",           //文本字体大小
            text: title 			 //需要显示的文本
        }
    })
}

// Set player marker on the map
function setPlayerMark(map, lat, lon) {
    const image = {
        url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        size: new google.maps.Size(20, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32),
    };
    const shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: "poly",
    };
    return new google.maps.Marker({
        position: {lat: parseFloat(lat), lng: parseFloat(lon)},
        map,
        icon: image,
        shape: shape,
        title: "Player",
        zIndex: 5// Z轴位置，是否显示在其他元素上层
    });
}

// Check which marker is clicked
function checkMarkerClick(marker_list)
{

}

//
/*
//fetch the location of player
async function getPlayerLocation() {
    console.log('asynchronous download begins');
    try {
        const response = await fetch('http://127.0.0.1:5000/player_location');
        return await response.json()
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('asynchronous load complete');
    }
}


// Set player marker on the map
async function setPlayerMark(map) {
    const image = {
        url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        size: new google.maps.Size(20, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32),
    };
    const shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: "poly",
    };
    const location = await getPlayerLocation()
    console.log(typeof location)
    new google.maps.Marker({
        position: {lat: parseFloat(location[0]), lng: parseFloat(location[1])},
        map,
        icon: image,
        shape: shape,
        title: "Player",
        zIndex: 5// Z轴位置，是否显示在其他元素上层
    });
}

// Update player status, 样例中玩家位置变化和任务系统是在JavaScript中
*/


/*
// ----------------------------------------------------------------------------------------------------------
// Set custom markers on the map. Can be used to display planes and task marks

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
  url: "https://i.pinimg.com/474x/10/bc/62/10bc629026de34507dae9c3234294e4a.jpg",
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
*/
