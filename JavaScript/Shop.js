const shop_list = [{
    'airplane_id':1,
    'airplane_type_name':'small',
    'fuel_volume': 10000,
    'fuel_per_kilo':10
},
    {
        'airplane_id':2,
        'airplane_type_name':'medium',
        'fuel_volume': 100000,
        'fuel_per_kilo':10
    },
]


// Shop Page
const shop = document.getElementById('shop')

// Shop Icon
const shop_icon = document.getElementById('shop_icon')

shop_icon.addEventListener('click', function (evt) {

    for (let i=0;i<shop_list.length;i++)
    {
        const goods = document.createElement('article')
        goods.innerHTML ="<figure>" +
            "<img src='' alt=''>" +
            "<figcaption>" + shop_list[i].airplane_type_name + "</figcaption>" +
            "</figure>"
        shop.appendChild(goods)
    }
    shop.style.display = 'block';
})

shop.addEventListener('click', function (evt) {
    shop.style.display = 'none';
    shop.innerHTML = '';
})


