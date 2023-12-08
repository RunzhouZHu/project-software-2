function task(player_id)
{

}

// Show task list left
function getUnreceivedTask(player_id, player_location)
{
    const unreceivedTask = getAPI("http://127.0.0.1:5000/getUnreceivedTaskId/" + player_id + "/" + player_location, 'getUnreceivedTask')
}

function getReceivedTask(player_id)
{

}

// Task show task window
// Task info = task window
function showTaskInfo(task_id) {
    const task_info = document.getElementById('task_info')

    // Show task info window
    task_info.innerHTML = "<img src='Css/pics/task_info1.png' alt='task_info'>" +
        "<article>"
        + "<img src=" + tasks_list[i].task_pic + " alt='task_pic'/>"
        + tasks_list[i].task_content
        + "</article>"
    task_info.style.display = 'block';

    // Show task button
    const taskButton = button("Css/pics/button.png", "Css/pics/button1.png", "2rem", "18rem", "37rem")

    /*
    const button = document.createElement('img')
    button.src = "Css/pics/button.png";
    button.alt = "button";
    button.style.height = "2rem";
    button.style.top = "18rem";
    button.style.left = "37rem";
    task_info.appendChild(button)

    button.addEventListener('mouseover', function (evt) {
        button.src = "Css/pics/button1.png"
    })
    button.addEventListener('mouseout', function (evt) {
        button.src = "Css/pics/button.png"
    })
    */
}

// Task button
function button(src, srcMouseover, height, top, left)
{
    // Show button
    const button = document.createElement('img')
    button.src = src;
    button.alt = "button";
    button.style.height = height;
    button.style.top = top;
    button.style.left = left;

    // Change button when mouse over
    button.addEventListener('mouseover', function (evt) {
        button.src = srcMouseover
    })
    button.addEventListener('mouseout', function (evt) {
        button.src = src
    })

    return button
}





/*
// Tasks, task names
const task_info = document.getElementById('task_info')
const tasks = document.getElementById('tasks')

for (let i = 0; i < tasks_list.length; i++) {
    const task_name = document.createElement('p')
    task_name.innerText = tasks_list[i].task_name
    tasks.appendChild(task_name)

    task_name.addEventListener('click', function (evt) {

        // Show task info window
        task_info.innerHTML = "<img src='Css/pics/task_info1.png' alt='task_info'>" +
            "<article>"
            + "<img src=" + tasks_list[i].task_pic + " alt='task_pic'/>"
            + tasks_list[i].task_content
            + "</article>"
        task_info.style.display = 'block';

        // Show task button
        const button = document.createElement('img')
        button.src = "Css/pics/button.png";
        button.alt = "button";
        button.style.height = "2rem";
        button.style.top = "18rem";
        button.style.left = "37rem";
        task_info.appendChild(button)

        button.addEventListener('mouseover', function (evt) {
            button.src = "Css/pics/button1.png"
        })
        button.addEventListener('mouseout', function (evt) {
            button.src = "Css/pics/button.png"
        })
    })
}

// Task info
task_info.addEventListener('click', function (evt) {
    task_info.style.display = 'none';
    task_info.innerHTML = '';
})


// Version Tasks
const version_tasks = document.getElementById('version_tasks')
const version_tasks_icon = document.getElementById('version_tasks_icon')
version_tasks_icon.addEventListener('click', function (evt) {

    version_tasks.innerHTML = "<img src='Css/pics/version_task.gif' alt='version task'>'" +
        "<article>"
        + "<img src=" + version_tasks_list[1].task_pic + " alt='task_pic'/>"
        + version_tasks_list[1].task_content
        + "</article>"

    version_tasks.style.display = 'block';

    // Show task button
    const button = document.createElement('img')
    button.src = "Css/pics/version_button.gif";
    button.alt = "button";
    button.style.height = "6rem";
    button.style.top = "25.5rem";
    button.style.left = "6rem";
    version_tasks.appendChild(button)
})

version_tasks.addEventListener('click', function (evt) {
    version_tasks.style.display = 'none';
})


//Task check
function taskCheck() {

}

 */