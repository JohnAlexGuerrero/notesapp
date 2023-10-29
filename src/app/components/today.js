import TodoList from "./todoList"
import { useEffect, useState } from "react"
import styles from '../style/today.module.css'

function filterTodos(todos, date) {
    const foundTodos = todos.filter(todo => todo.date == date)
    return foundTodos
}

export default function Today({todos}) {
    const [month, setMonth] = useState("")
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let today = new Date(2016, 0, 4)
    
    let fullDate = months[today.getMonth()] + ' ' + 
                   ( today.getDate() < 10 ? `0${today.getDate()}`:today.getDate()) +
                    ', ' + today.getFullYear()

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[today.getDay()]
    
    const foundTodos = filterTodos(todos, fullDate)


    useEffect(()=>{
        setMonth(months[today.getMonth()])
    },today)

    return (
        <div className={styles.today}>
            <h1>{day}</h1>
            <p>{fullDate}</p>

            <TodoList todos={foundTodos} />
        </div>
    )
}