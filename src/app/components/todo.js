import styles from '../style/todo.module.css'

export default function Todo(props) {
    return (
        <div className={styles.todo}>
            <p>{props.todo.description}</p>
            <input type="checkbox" checked={props.todo.completed} />
        </div>
    )
}