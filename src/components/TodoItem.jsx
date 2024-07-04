import styles from './todoitem.module.css';

export default function TodoItem({item, todos, setTodos}) {

    const handleDelete = (item) => {
        setTodos(todos.filter((todo) => todo !== item));
    }

    function handleClick (name) {
        const newArr = todos.map((todo) => (todo.name === name) ? {...todo, done: !todo.done}:todo)
        setTodos(newArr)
    }

    const className = item.done ? styles.completed : ""
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span className={className} onClick={() => handleClick(item.name)}>
                    {item.name}
                </span>
                <span>
                    <button onClick={() => handleDelete(item)} className={styles.deleteBtn}>X</button>
                </span>
            </div>
            <hr className={styles.line}/>
            {console.log(todos)}
        </div>
    )
}