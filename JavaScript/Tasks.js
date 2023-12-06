// Task example, should fetch from database
const tasks_list = [{
    'task_id': 1,
    'task_name': 'My first airplane',
    'task_text': '<p>text example task text example task text example task text example task text example task1111111</p>',
    'task_pic': 'Css/pics/task_pics/task_pic1.jpg'
},
    {
        'task_id': 2,
        'task_name': 'example_task_name2',
        'task_text': '<p>example task text example task text example task text example task text example task22222222</p>',
        'task_pic': 'Css/pics/task_pics/task_pic2.jpg'
    },
]

const version_tasks_list = [{
    'task_id': 1,
    'task_name': 'example_version_task_name1',
    'task_text': '<p>text example task text example task text example task text example task text example task1111111</p>',
    'task_pic': 'Css/pics/task_pics/version_task_pic1.jpg'
},
    {
        'task_id': 2,
        'task_name': 'example_version_task_name2',
        'task_text': '<p>example task text example task text example task text example task text example task22222222</p>',
        'task_pic': 'Css/pics/task_pics/version_task_pic1.jpg'
    },
]




// Tasks, task names
const task_info = document.getElementById('task_info')
const tasks = document.getElementById('tasks')

for (let i=0;i<tasks_list.length;i++)
{
    const task_name = document.createElement('p')
    task_name.innerText = tasks_list[i].task_name
    tasks.appendChild(task_name)

    task_name.addEventListener('click', function (evt) {

        // Show task info window
        task_info.innerHTML ="<img src='Css/pics/task_info1.png' alt='task_info'>"+
            "<article>"
            +"<img src=" + tasks_list[i].task_pic + " alt='task_pic'/>"
            + tasks_list[i].task_text
            +"</article>"
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

    version_tasks.innerHTML = "<img src='Css/pics/version_task.gif' alt='version task'>'"+
            "<article>"
            +"<img src=" + version_tasks_list[1].task_pic + " alt='task_pic'/>"
            + version_tasks_list[1].task_text
            +"</article>"

    version_tasks.style.display = 'block';

    // Show task button
    const button = document.createElement('img')
    button.src = "Css/pics/version_button.gif";
    button.alt = "button";
    button.style.height = "6rem";
    button.style.top = "32rem";
    button.style.left = "8rem";
    version_tasks.appendChild(button)
})

version_tasks.addEventListener('click', function (evt) {
    version_tasks.style.display = 'none';
})



//Task check
function taskCheck(){

}