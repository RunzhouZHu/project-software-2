const shop_list = [{
    'airplane_id': 1,
    'airplane_type_name': 'small',
    'fuel_volume': 10000,
    'fuel_per_kilo': 10,
    'plane_pic': 'Css/pics/shop_pics/shop_pic1.jpg',
    'plane_text': 'A small airplane, can be used for short distance travel.'
},
    {
        'airplane_id': 2,
        'airplane_type_name': 'medium',
        'fuel_volume': 100000,
        'fuel_per_kilo': 10,
        'plane_pic': 'Css/pics/shop_pics/shop_pic2.jpg',
        'plane_text': 'A bigger plane, widely used for passengers and cargo freight.'
    },
    {
        'airplane_id': 3,
        'airplane_type_name': 'large',
        'fuel_volume': 1000000,
        'fuel_per_kilo': 10,
        'plane_pic': 'Css/pics/shop_pics/shop_pic3.jpg',
        'plane_text': 'A large plane with longer travel distance, once used to transport military equipment.'
    },
    {
        'airplane_id': 4,
        'airplane_type_name': 'legendary',
        'fuel_volume': 10000000,
        'fuel_per_kilo': 10,
        'plane_pic': 'Css/pics/shop_pics/shop_pic4.jpg',
        'plane_text': 'A spaceship from the future, there is nowhere she can not go.'
    },
]

function shopInitial() {
    // Shop Page
    const shop = document.getElementById('shop');

    // Shop Icon
    const shop_icon = document.getElementById('shop_icon');

    const shop_page = document.createElement('article')

    shop.appendChild(shop_page)

    for (let i = 0; i < shop_list.length; i++) {
        const goods = document.createElement('figure');
        goods.innerHTML = "<img src=" +
            shop_list[i].plane_pic +
            " alt='plane_pic'>" +
            "<figcaption>" + shop_list[i].airplane_type_name + "</figcaption>"

        const text = document.createElement('p');
        text.innerText = shop_list[i].plane_text;

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



