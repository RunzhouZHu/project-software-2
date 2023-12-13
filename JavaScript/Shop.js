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

        const text1 = document.createElement('p');
        const text2 = document.createElement('p');
        const text3 = document.createElement('p');
        text1.innerText = shop_list[i].airplane_text;
        text2.innerText = "The price is: " + shop_list[i].airplane_price;
        text3.innerText = "The fuel volume is: " + shop_list[i].fuel_volume;


        goods.appendChild(text1)
        goods.appendChild(text2)
        goods.appendChild(text3)


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
function shopFunction(shopList, player) {
    for (let i = 0; i < shopList.length; i++) {
        const plane_html = document.getElementById(String(i))
        plane_html.addEventListener('mouseover', function (evt) {
            plane_html.style.backgroundColor = 'purple'
        })
        plane_html.addEventListener('mouseout', function (evt) {
            plane_html.style.backgroundColor = 'transparent'
        })

        // player buy plane
        if (shopList[i].is_players === 1) {
            plane_html.innerText = plane_html.innerText + "(SOLD)"
        } else {
            plane_html.addEventListener('click', function hhd (evt)
            {
                if (player.current_amount > shopList[i].airplane_price)
                {
                    shopList[i].is_players = 1
                    player.current_amount = String(parseFloat(player.current_amount) - parseFloat(shopList[i].airplane_price))
                    displayPlayerInfo(player)
                    plane_html.innerText = plane_html.innerText + "(SOLD)"

                    document.removeEventListener('click', hhd)
                }
                else
                {
                    alert("You don't have enough money.")
                }
            },  {once: true})
        }

        //player select plane
        plane_html.addEventListener('click', function (evt)
        {
            if (shopList[i].is_players === 1)
            {
                if (shopList[i].is_current_airplane === 1)
                {

                }
                else
                {
                    for (let j = 0; j < shopList.length; j++)
                    {
                        shopList[j].is_current_airplane = 0
                        if (shopList[j].is_players === 1)
                        {
                            const plane_html1 = document.getElementById(String(j))
                            plane_html1.innerText = shopList[j].airplane_type_name + "(SOLD)"
                        }
                    }
                    shopList[i].is_current_airplane = 1

                    //change player fuel consumption
                    player.consumption = shopList[i].fuel_per_kilo

                    //display player fuel on the top left
                    displayFuel(shopList[i].current_fuel_volume, shopList[i].fuel_volume)

                    //add s behind the plane's name to show it is selected
                    plane_html.innerText = shopList[i].airplane_type_name + "(SOLD)" + '(*)'
                    console.log("current plane is " + shopList[i].airplane_type_name)
                }
            }
        })
    }
}

// refuel
function refuel(player, shopList, fuel_price) {
    const refuel_html = document.getElementById('refuel')
    //effects
    refuel_html.addEventListener('mouseover', function (evt) {
        refuel_html.style.backgroundColor = 'gray'
    })
    refuel_html.addEventListener('mouseout', function (evt){
        refuel_html.style.backgroundColor = 'transparent'
    })

    //refuel
    refuel_html.addEventListener('click', function (evt) {
        for (let i = 0; i < shopList.length; i++)
        {
            if (shopList[i].is_current_airplane === 1)
            {
                const fuel = shopList[i].fuel_volume - shopList[i].current_fuel_volume
                if (player.current_amount > fuel * fuel_price)
                {
                    shopList[i].current_fuel_volume = shopList[i].fuel_volume
                    player.current_amount = player.current_amount - fuel * fuel_price
                }
                else if (player.current_amount > 0 && player.current_amount < fuel * fuel_price)
                {
                    shopList[i].current_fuel_volume = shopList[i].current_fuel_volume + player.current_amount / fuel_price
                    player.current_amount = 0
                    alert("You've run out of money, watch out!!")
                }
                else if (player.current_amount === 0)
                {
                    alert("You don't have a sent.")
                }
                displayFuel(shopList[i].current_fuel_volume, shopList[i].fuel_volume)
                displayPlayerInfo(player)
            }
        }
    })
}


// Display fuel on the top left
function displayFuel(fuel_current, fuel_full) {
    const player_fuel = document.getElementById("player_fuel")
    player_fuel.innerText = parseInt(fuel_current) + '/' + fuel_full
}

