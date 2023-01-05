import React from 'react';
import {FilterValuesType} from './App';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TodolistPropsType = {
    todoListTitle: string
    tasks: TaskType[]
    removeTask: (taskID: string) => void
    changeTodoListFilter: (filterValue: FilterValuesType) => void
}

export const Todolist = (props: TodolistPropsType) => {
    // вариант с функцией. При этом варианте мапим в разметке ниже
    // (<ul>{props.tasks.map((task: TaskType)}</ul>)
    // const getTaskItem = (task: TaskType) => {
    //     return (
    //         <li key={task.id}>
    //             <input type="checkbox" checked={task.isDone}/>
    //             <span>{task.title}</span>
    //             <button onClick={() => props.removeTask(task.id)}>x</button>
    //         </li>
    //     )
    // }
    // вариант с переменной. При этом варианте мапим для переменной,
    // а в разметку отправляем переменную (<ul>{tasksItems}</ul>)
    const tasksItems = props.tasks.length
        ? props.tasks.map((task: TaskType) => {
            return (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={() => props.removeTask(task.id)}>x</button>
                </li>
            )
        }) : <span>Task list is empty</span>
    return (
        <div>
            <h3>{props.todoListTitle}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>{tasksItems}</ul>
            <div>
                <button onClick={() => props.changeTodoListFilter('all')}
                >All
                </button>
                <button onClick={() => props.changeTodoListFilter('active')}>Active</button>
                <button onClick={() => props.changeTodoListFilter('completed')}>Completed</button>
            </div>
        </div>
    );
};