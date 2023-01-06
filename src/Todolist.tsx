import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
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
    addTask: (title: string) => void
    changeTodoListFilter: (filterValue: FilterValuesType) => void
    children?: React.ReactNode
}

export const Todolist: React.FC<TodolistPropsType> = (props) => {
        const {
            todoListTitle,
            tasks,
            removeTask,
            addTask,
            changeTodoListFilter,
        } = props

        let [title, setTitle] = useState<string>('')
        const tasksItems = tasks.length
            ? tasks.map((task: TaskType) => {
                const onClickRemoveTaskHandler = () => removeTask(task.id)
                return (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                        <button onClick={onClickRemoveTaskHandler}>x</button>
                    </li>
                )
            }) : <span>Task list is empty</span>
        const inputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
        const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addTaskOnClickHandler()
        const addTaskOnClickHandler = () => {
            addTask(title)
            setTitle('')
        }
        const filterOnClickHandler = (filter: FilterValuesType) => () => changeTodoListFilter(filter)


        return (
            <div>
                <h3>{todoListTitle}</h3>
                <div>
                    <input value={title}
                           onChange={inputOnChangeHandler}
                           onKeyDown={onKeyDownHandler}/>
                    <button onClick={addTaskOnClickHandler}>+</button>
                </div>
                <ul>{tasksItems}</ul>
                <div>
                    <button onClick={filterOnClickHandler('all')}>All</button>
                    <button onClick={filterOnClickHandler('active')}>Active</button>
                    <button onClick={filterOnClickHandler('completed')}>Completed</button>
                </div>
            </div>
        );
    }
;

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