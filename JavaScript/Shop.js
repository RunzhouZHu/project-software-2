// Get data from database
async function getShopList(playerId) {
    const shop_list = await getAPI("http://127.0.0.1:5000/shop/" + playerId)

    return shop_list
}


function shopInitial(shop_list) {

    // Shop Page
    const shop = document.getElementById('shop');

    // Shop Icon
    const shop_icon = document.getElementById('shop_icon');

    const shop_page = document.createElement('article')

    shop.appendChild(shop_page)

    for (let i = 0; i < shop_list.length; i++) {
        const goods = document.createElement('figure');
        goods.innerHTML = "<img src=" +
            shop_list[i].airplane_pic +
            " alt='plane_pic'>" +
            "<figcaption id = '" + i + "'>" + shop_list[i].airplane_type_name + "</figcaption>"

        const text = document.createElement('p');
        text.innerText = shop_list[i].airplane_text;

        goods.appendChild(text)

        shop_page.appendChild(goods)


    }

    shop_icon.addEventListener('click', function (evt) {
        if (shop.style.display === 'block') {
            shop.style.display = 'none'
        } else {
            shop.style.display = 'block';
        }
    })
}


// Shop function
function shopFunction(shopList, playerId) {
    const plane_small = document.getElementById('0')
    const plane_medium = document.getElementById('1')
    const plane_large = document.getElementById('2')
    const plane_legendary = document.getElementById('3')

    plane_small.addEventListener('mousemove', function (evt0) {
        plane_small.style.backgroundColor = 'purple'
    })
    plane_medium.addEventListener('mousemove', function (evt0) {
        plane_medium.style.backgroundColor = 'purple'
    })
    plane_large.addEventListener('mousemove', function (evt0) {
        plane_large.style.backgroundColor = 'purple'
    })
    plane_legendary.addEventListener('mousemove', function (evt0) {
        plane_legendary.style.backgroundColor = 'purple'
    })

    plane_small.addEventListener('mouseout', function (evt0) {
        plane_small.style.backgroundColor = 'transparent'
    })
    plane_medium.addEventListener('mouseout', function (evt0) {
        plane_medium.style.backgroundColor = 'transparent'
    })
    plane_large.addEventListener('mouseout', function (evt0) {
        plane_large.style.backgroundColor = 'transparent'
    })
    plane_legendary.addEventListener('mouseout', function (evt0) {
        plane_legendary.style.backgroundColor = 'transparent'
    })

    //HHDHHDHHDHHD
    plane_small.addEventListener('click', function (evt0) {
        plane_small.innerText = plane_small.innerText + "  SOLD!"
    })
    plane_medium.addEventListener('click', function (evt0) {
        plane_medium.innerText = plane_medium.innerText + "  SOLD!"
    })
    plane_large.addEventListener('click', function (evt0) {
        plane_large.innerText = plane_large.innerText + "  SOLD!"
    })
    plane_legendary.addEventListener('click', function (evt0) {
        plane_legendary.innerText = plane_legendary.innerText + "  SOLD!"
    })


}



