// Task example, should fetch from database
const tasks_list = [{
    'task_id': 1,
    'task_name': 'example_task_name1',
    'task_text': '<p>text example task text example task text example task text example task text example task1111111</p>',
    'task_others': 'jjsjsjsjjs'
},
    {
        'task_id': 2,
        'task_name': 'example_task_name2',
        'task_text': '<p>example task text example task text example task text example task text example task22222222</p>',
        'task_others': 'jjsjsjsjjs'
    },
]

const version_tasks_list = [{
    'task_id': 1,
    'task_name': 'example_version_task_name1',
    'task_text': '<p>text example task text example task text example task text example task text example task1111111</p>',
    'task_others': 'jjsjsjsjjs'
},
    {
        'task_id': 2,
        'task_name': 'example_version_task_name2',
        'task_text': '<p>example task text example task text example task text example task text example task22222222</p>',
        'task_others': 'jjsjsjsjjs'
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

        task_info.innerHTML ="<img src='Css/pics/task_info1.png' alt='task_info'>"+
            "<article>"+ tasks_list[i].task_text
            +"<img src='Css/pics/task_pic.png' alt='task_pic'/>"
            +"</article>"

        task_info.style.display = 'block';
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
            "<article>"+ version_tasks_list[1].task_text
            +"<img src='Css/pics/task_pic.png' alt='task_pic'>"
            +"</article>"

    version_tasks.style.display = 'block';
})

version_tasks.addEventListener('click', function (evt) {
    version_tasks.style.display = 'none';
})

