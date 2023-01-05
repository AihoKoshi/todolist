import React, {useEffect, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    const todoListTitle: string = 'What to learn';
    const [tasks, setTasks] = useState<Array<TaskType>>([ // setTasks работает несинхронно. Он передает полученные данные useState, который проверяет данные и потом отрисовывает. Это занимает 5-10 мсек.
        {id: v1(), title: 'HTML & CSS', isDone: false},
        {id: v1(), title: 'ES & TS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
    ]);

    const removeTask = (taskID: string) => {
        const updatedTasks = tasks.filter(task => task.id !== taskID) // асинхронно, 5-10 ms
        console.log(tasks)
        setTasks(updatedTasks)
    }
    // useEffect(() => { // хук. Выполняет функцию, при этом следит за переменными, которые мы передаем в массив зависимостей
    //     console.log(tasks)  // если tasks изменится, то выведи ее в консоль.
    // },[tasks])

    const [filter, setFilter] = useState<FilterValuesType>('all')
    const changeTodoListFilter = (filterValue: FilterValuesType) => {
        setFilter(filterValue)
    }

    const getFilteredTasksForRender = () => {

        switch(filter){
            case 'active':
                return tasks.filter(t => !t.isDone)
            case 'completed':
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }
    const filteredTasksForRender: TaskType[] = getFilteredTasksForRender()

    return (
        <div className="App">
            <Todolist
                todoListTitle={todoListTitle}
                tasks={filteredTasksForRender}
                removeTask={removeTask}
                changeTodoListFilter = {changeTodoListFilter}
            />
        </div>
    );
}

export default App;
