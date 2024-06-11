import styles from './footer.module.css'

export default function Footer({todos}) {
    const completedItems = (todos.filter(todo => todo.done)).length
    const totalTodos = todos.length
    return (
        <div className={styles.footer}>
            <span> Total Items: {totalTodos}</span>
            <span className={styles.item}> Completed Items: {completedItems}</span>
        </div>
    )
}