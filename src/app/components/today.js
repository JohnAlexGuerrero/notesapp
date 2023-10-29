import TodoList from "./todoList"

export default function Today({todos}) {
    let today = 'January 04, 2016'
    const foundTodos = filterTodos(todos, today)

    return (
        <>
            <h1>Monday</h1>
            <p>January 04, 2016</p>

            <TodoList todos={foundTodos} />
        </>
    )
}