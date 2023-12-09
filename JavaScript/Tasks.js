// Get received task list
async function getReceivedTaskList(playerId)
{
    const receivedTaskList = await getAPI("http://127.0.0.1:5000/getReceivedTasks/" + playerId, "Get received task list")

    return receivedTaskList
}


// Display received tasks
function displayReceivedTasks(task_list) {
    const tasks_html = document.getElementById('tasks')
    for (let i = 0; i < task_list.length; i++) {
        const task_name = document.createElement('p')
        task_name.innerText = task_list[i].task_name
        tasks_html.appendChild(task_name)
        task_name.addEventListener('click', function (evt) {
            showTaskInfo(task_list[i])
        })
    }
}

// Clear task list left side
function clearTaskList(){
    const tasks_html = document.getElementById('tasks')
    tasks_html.innerHTML = '<img src="Css/pics/tasks.png" alt="tasks">'
}


//Get unreceived task list
async function getUnreceivedTaskList(playerId)
{
    const  unreceivedTaskList = await getAPI("http://127.0.0.1:5000/getUnreceivedTasks/" + playerId, "Get unreceived task list")

    return unreceivedTaskList
}

// Player take task
async function takeTask(playerId, taskId)
{
    await getAPI("http://127.0.0.1/takeTasks?paramToBack={'player_id':" + parseInt(playerId)  + ",'task_id':" + parseInt(taskId) + "}")
}

//Get finished task list
async function getFinishedTaskList(playerId)
{
    const finishedTaskList = await getAPI("http://127.0.0.1:5000/getFinishedTasks/" + playerId, "Get finished task list")

    return finishedTaskList
}

// Show task info window
function showTaskInfo(task) {
    const task_info = document.getElementById('task_info')

    // Show task info window
    task_info.innerHTML = "<img src='Css/pics/task_info1.png' alt='task_info'>" +
        "<article>"
        + "<img src=" + "Css/pics/task_pics/task_pic1.jpg" + " alt='task_pic'/>"
        + task.task_content
        + "</article>"
    task_info.style.display = 'block';

    // Show task button
    const taskButton = button("Css/pics/button.png", "Css/pics/button1.png", "2rem", "18rem", "37rem")
    task_info.appendChild(taskButton)

    taskButton.addEventListener('click', function (evt) {
        task_info.style.display = 'none'
    })





//---------------------------------------------------------------------------------------------------------------------------
// 以下弃用

// Show task list left
async function getUnreceivedTask(player_id, player_location) {
    const unreceivedTask = await getAPI("http://127.0.0.1:5000/getUnreceivedTasks/" + player_id + "/" + player_location, 'getUnreceivedTask')
    return unreceivedTask
}

async function getReceivedTask(player_id) {
    const receivedTask = await getAPI("http://127.0.0.1:5000/getReceivedTask/" + player_id, 'getReceivedTask')
    const task_html = document.getElementById('tasks')


/*    for (let i = 0; i < receivedTask.length; i++) {
        const task_name = document.createElement('p')
        task_name.innerText = receivedTask[i].task_name
        task_html.appendChild(task_name)
        task_name.addEventListener('click', function (evt) {
            showTaskInfo(receivedTask[i])
        })
    }*/
}

// Task show task window
// Task info = task window

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
function button(src, srcMouseover, height, top, left) {
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