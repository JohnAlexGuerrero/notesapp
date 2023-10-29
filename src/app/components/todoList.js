import Todo from "./todo"
import styles from '../style/todolist.module.css'

export default function TodoList({todos}) {
    let heading = ''
    const count = todos.length
    if (count > 0) {
        const noun = count > 1 ? 'Todos' : 'Todo'
        heading = count + ' ' + noun
    }

    return (
        <section className={styles.todolist}>
            <h3 className={styles.heading}>{heading}</h3>
            {todos.map(todo =>
                <Todo todo={todo} key={todo.id} />
            )}
        </section>
    )
}