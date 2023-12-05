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
shop.addEventListener('click', function (evt) {
    shop.style.display = 'none';
})


// Shop Icon
const shop_icon = document.getElementById('shop_icon')
const goods = document.createElement('p')
shop_icon.addEventListener('click', function (evt) {

    shop.style.display = 'block';

    for (let i=0;i<shop_list.length;i++)
    {
        goods.innerText =shop_list[i].airplane_type_name

        shop.appendChild(goods)
    }

})
