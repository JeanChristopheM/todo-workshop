import React, {useState} from "react";
import ListItem from "./list-item";
import Header from "./header";

function App() {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState(null);

    const submitTodo = () => {
        const newTodo = {
            status: false,
            task: value,
            id: new Date().getTime(),
        };
        setTodos([...todos, newTodo]);
    };
    const changeStatus = (searchingKey) => {
        const todosToModify = [...todos];
        for (let todo of todosToModify) {
            if (searchingKey === todo.id) {
                todo.status = !todo.status;
            }
        }
        setTodos(todosToModify);
    };
    const deleteTodo = (searchingKey) => {
        const todosToModify = todos.filter((todo) => todo.id !== searchingKey);
        setTodos(todosToModify);
    };
    return (
        <>
            <Header title={"List de todo"} />
            <main className={"main"}>
                <div className={"input"}>
                    <input
                        type={"text"}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                    />
                    <button type={"button"} onClick={submitTodo}>
                        {"submit"}
                    </button>
                </div>
                <div className={"todoContainer"}>
                    <ul>
                        {todos.map((todo) => (
                            <ListItem
                                key={todo.id}
                                todo={todo}
                                handleStatus={changeStatus}
                                handleDelete={deleteTodo}
                            />
                        ))}
                    </ul>
                </div>
            </main>
        </>
    );
}

export default App;
