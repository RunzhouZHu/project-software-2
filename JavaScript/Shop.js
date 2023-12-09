// Get data from database
async function getShopList(playerId)
{
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
            "<figcaption>" + shop_list[i].airplane_type_name + "</figcaption>"

        const text = document.createElement('p');
        text.innerText = shop_list[i].airplane_text;

        goods.appendChild(text)

        shop_page.appendChild(goods)


    }

    shop_icon.addEventListener('click', function (evt) {
        shop.style.display = 'block';
    })

    shop.addEventListener('click', function (evt) {
        shop.style.display = 'none';
    })
}



