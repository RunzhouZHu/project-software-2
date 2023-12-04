// Task example, should fetch from database
const tasks_info = [{
    'task_id': 1,
    'task_name': 'example_task_name',
    'task_text': 'example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text ',
    'task_others': 'jjsjsjsjjs'
},
    {
        'task_id': 2,
        'task_name': 'example_task_name',
        'task_text': 'example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text example task text ',
        'task_others': 'jjsjsjsjjs'
    },
]

// Tasks

const task_info = document.getElementById('task_info')


const tasks = document.getElementById('tasks')
tasks.innerHTML = "<img src=\"Css/pics/tasks.png\" alt=\"tasks\">\n" +
    "<article> task task task111111 </article>"

tasks.addEventListener('click', function (evt) {
    task_info.style.display = 'block';
})



// Task info
task_info.addEventListener('click', function (evt) {
    task_info.style.display = 'none';
})

