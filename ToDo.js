const ToDo = {
    taskList: { // список задач
        'makeObj': 'in progress',
        'make home work': 'in progress'
    },
    viewTaskList() { //метод просмотра задач
        console.log('');
        if (this.taskList) {
            let globalToDoStatus = 0;
            let checkTask = 0;
            for (const name in ToDo.taskList) {
                console.log(name + ' ' + ToDo.taskList[name]);
                checkTask = checkTask + 1;
                if (ToDo.taskList[name] === 'Done') {
                    globalToDoStatus = globalToDoStatus + 1;
                }
            }
            if (globalToDoStatus === 0 && checkTask !== 0) { // проверка на наличие выполненных задач
                console.log('');
                console.log('Nothing is done!');
            }
            else if (checkTask === 0 && globalToDoStatus === 0) { // если список задач пуст
                console.log('No tasks!');
            }
        }
    },
    addTask(task) { // метод добавления задач
        this.taskList[task] = 'To Do';
        console.log('');
        console.log(task + ' added to task list!');
    },
    deleteTask(task) { // метод удаления задач
        delete this.taskList[task];
        console.log('');
        console.log(task + ' deleted from task list!');
    },
    deleteAllTasks() { // метод удаления всех задач
        for (const name in ToDo.taskList) {
           delete this.taskList[name];
        }
        console.log('All tasks deleted!');
    },
    changeStatus(task, newStatus) { // метод изменения статуса задачи
        if (this.taskList[task]) { // проверка на содержание задачи в тасклисте
            this.taskList[task] = newStatus;
            console.log('');
            console.log(task + ' status changed to ' + newStatus);
        }
        else { // сообщение, если задача не найдена
            console.log('');
            console.log('Task ' + task + ' does not exist!');
        }
    }
}

ToDo.viewTaskList();
ToDo.addTask('listenMusic');
ToDo.addTask('createMethods');
ToDo.viewTaskList();
ToDo.changeStatus('createMethods', 'Done');
ToDo.changeStatus('makeObj', 'Done');
ToDo.viewTaskList();
ToDo.deleteTask('listenMusic');
ToDo.changeStatus('listenMusic', 'Done');
ToDo.deleteAllTasks();
ToDo.viewTaskList();


