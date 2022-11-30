import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    const todoListTitle: string = 'What to learn';
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'CSS', isDone: false},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
    ]);

    const [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTask = (taskID: string) => {
        const updatedTasks = tasks.filter(task => task.id !== taskID)
        setTasks(updatedTasks)
    }

    const changeTodoListFilter = (filterValue: FilterValuesType) => {
        setFilter(filterValue)
    }
    let tasksForRender: TaskType[] = [];
    if (filter === 'all') {
        tasksForRender = tasks
    } else if (filter === 'active'){
        tasksForRender = tasks.filter(task => !task.isDone)
    } else if (filter === 'completed'){
        tasksForRender = tasks.filter(task => task.isDone)
    }

    return (
        <div className="App">
            <Todolist
                todoListTitle={todoListTitle}
                tasks={tasksForRender}
                removeTask={removeTask}
                changeTodoListFilter = {changeTodoListFilter}
            />
        </div>
    );
}

export default App;
