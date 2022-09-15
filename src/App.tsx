import React from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

function App() {
    let tasks1: TaskType[] = [
        {id: v1(), title: 'CSS', isDone: false},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
    ];
    let tasks2: Array<TaskType> = [
        {id: v1(), title: 'Terminator', isDone: false},
        {id: v1(), title: 'XXX', isDone: true},
        {id: v1(), title: 'Gentlemen of fortune', isDone: false},
    ];
    return (
        <div className="App">
            <Todolist title={'What to learn'} tasks={tasks1}/>
            <Todolist title={'What to watch'} tasks={tasks2}/>
        </div>
    );
}

export default App;
