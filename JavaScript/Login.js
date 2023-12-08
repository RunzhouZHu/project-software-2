const button = document.getElementById('button')
button.addEventListener('mouseover', function (evt) {
    button.src = "Css/pics/button1.png"
})

button.addEventListener('mouseout', function (evt) {
    button.src = "Css/pics/button.png"
})


//click event
button.addEventListener('click', async function (evt) {
    //location.href = "index.html"
    await login()
})


//Functions
//login
async function login()
{
    const userName = document.getElementById('user_name').value
    const player_info = await getAPI("http://127.0.0.1:80/login?paramToBack={'player_name':" + userName + ", 'player_pic':" + "''" + "}", 'login')

    return player_info
}



//
async function getAPI(url, urlInfo)
{
    console.log(urlInfo + 'download begins');
    try {
        const response = await fetch(url);
        return await response.json()
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log(urlInfo + 'load complete');
    }
}