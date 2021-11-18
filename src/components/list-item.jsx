import React from "react";
function ListItem({todo, handleStatus, handleDelete}) {
    return (
        <li className={"todo"} key={todo.id}>
            <p>{todo.task}</p>
            <button
                type={"button"}
                onClick={() => {
                    handleStatus(todo.id);
                }}>
                {todo.status ? "fait" : "à faire"}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    handleDelete(todo.id);
                }}>
                {"DELETE"}
            </button>
        </li>
    );
}

export default ListItem;
