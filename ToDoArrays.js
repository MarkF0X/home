const ToDo = [
    {name: 'create post', status: 'in progress', priority: 'low'},
    {name: 'test', status: 'done', priority: 'high'},
    {name: 'test1', status: 'todo', priority: 'high'}
]

function filterHighPriority() { // сортировка задач с высоким приоритетом
    const highToDo = ToDo.filter(priority => priority.priority === 'high');
    const hTDtodo = highToDo.filter(stat => stat.status === 'todo');
    const hTDinProgress = highToDo.filter(stat => stat.status === 'in progress');
    const generalHigh = hTDtodo.concat(hTDinProgress);
    let i = 0;
    for (const task of generalHigh) { // итерирование массива без индексов с использованием цикла фор оф
        i = i + 1;
    }
    if (i === 0) {
        return 1;
    }
    else {
        return generalHigh;
    }
} // фильтр задач с высоким приоритетом

function filterLowPriority() { // сортировка задач с низким приоритетом
    const lowToDo = ToDo.filter(priority => priority.priority === 'low');
    const lTDtodo = lowToDo.filter(stat => stat.status === 'todo');
    const lTDinProgress = lowToDo.filter(stat => stat.status === 'in progress');
    const generalLow = lTDtodo.concat(lTDinProgress);
    let i = 0;
    for (const task of generalLow) { // итерирование массива без индексов с использованием цикла фор оф
        i = i + 1;
    }
    if (i === 0) {
        return 1;
    }
    else {
        return generalLow;
    }
} // фильтр задач с низким приоритетом
function viewTasksList() { // функция просмотра не сделанных задач
    if (filterHighPriority() !== 1) {
        console.log(`\nHigh priority tasks:`);
        for (const task of filterHighPriority()) {
            if (task.status !== 'done')
                console.log(`   ${task.name} ${task.status}`);
        }
    }
    else if (filterHighPriority() === 1) {
        console.log(`\nHigh priority tasks:\n   -`);
    }
    if (filterLowPriority() !== 1) {
        console.log(`\nLow priority tasks:`);
        for (const task of filterLowPriority()) {
            if (task.status !== 'done')
                console.log(`   ${task.name} ${task.status}`);
        }
    }
    else if (filterLowPriority() === 1) {
        console.log(`\nLow priority tasks:\n   -`);
    }
    return 1;
} // просмотр не завершённых задач

function viewDoneTasks () {
    console.log(`\nCompleted tasks:`)
    for (const task of ToDo) {
        if (task.status === 'done')
            console.log(`   ${task.name}`);
    }
    return 1;
} // просмотр завершённых задач

function addTask(task1, status1, priority1) { // добавление задачи
    if ((status1 === 'todo' ||
        status1 === 'in progress' ||
        status1 === 'done') &&
        (priority1 === 'high' ||
            priority1 === 'low')) {
        ToDo.push({name: task1, status: status1, priority: priority1});
        console.log(`\n${task1} added to tasks list!`)
    }
    else {
        console.log('\nInvalid arguments. Retry');
    }
} // добавление задачи в список

function delTask(name) {
    let delTask1 = ToDo.findIndex(task => task.name === name);
    ToDo.splice(delTask1,1);
    console.log(`\n${name} deleted!`);
} // удаление задачи

function changeTaskStatus(name, newStatus) {
    let i = ToDo.findIndex(task => task.name === name);
    if (i === ToDo.findIndex(task => task.name === name) && (newStatus === 'todo' || newStatus === 'in progress' || newStatus === 'done')) {
        ToDo[i].status = newStatus;
        console.log(`For task ${name} status changed on ${newStatus}`);
    }
    else {
        console.log(`Task ${name} does not exist or invalid status!`);
    }
    return 1;
} // смена статуса задачи

function changeTaskPriority(name, newPriority) {
    let i = ToDo.findIndex(task => task.name === name);
    if (i === ToDo.findIndex(task => task.name === name) && (newPriority === 'high' || newPriority === 'low')) {
        ToDo[i].priority = newPriority;
        console.log(`For task ${name} priority changed on ${newPriority}`);
    }
    else {
        console.log(`Task ${name} does not exist or invalid priority!`);
    }
    return 1;
} //смена приоритета задачи

viewTasksList();
// viewDoneTasks();
addTask('add task', 'in progress', 'low');
viewTasksList();
// delTask('test1');
viewTasksList();
addTask('make dinner', 'todo', 'high');
addTask('open window', 'todo', 'high');
viewTasksList();
delTask('test1');
viewTasksList();
changeTaskStatus('make dinner', 'in progress');
viewTasksList();
changeTaskStatus('make dinner', 'in progress1');
viewTasksList();
changeTaskPriority('open window', 'low');
viewTasksList();
changeTaskPriority('open window', 'lov');
viewTasksList();
