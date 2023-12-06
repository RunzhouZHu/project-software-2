const button = document.getElementById('button')
button.addEventListener('mouseover', function (evt) {
    button.src = "Css/pics/button1.png"
})

button.addEventListener('mouseout', function (evt) {
    button.src = "Css/pics/button.png"
})


//click event
button.addEventListener('click', function (evt) {
    location.href = "index.html"
})