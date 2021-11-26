import { useState } from "react";

export default function Todos() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([
        {
            id: 1,
            label: "Wake up",
            done: true,
        },
        {
            id: 2,
            label: "Brush teeth",
        },
        {
            id: 3,
            label: "Sleep",
            done: true,
        },
        {
            id: 4,
            label: "Dream",
        },
    ]);

    function addTodo() {
        const newTodos = [...todos, { id: Date.now(), label: text }];
        setTodos(newTodos);
        setText("");
    }

    function removeTodo(id) {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }

    function toggleDone(id) {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, done: !todo.done };
            } else {
                return todo;
            }
        });
        setTodos(newTodos);
    }

    return (
        <div className="container" style={{ maxWidth: 400 }}>
            <div className="content">
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <span className="mr-2" style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                                {todo.label}
                            </span>
                            <button className={`button is-small ${todo.done ? "is-success" : ""}  is-light mr-2`} onClick={() => toggleDone(todo.id)}>
                                Хийсэн
                            </button>
                            <button className="button is-small is-danger is-light" onClick={() => removeTodo(todo.id)}>
                                Устгах
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="is-flex">
                    <input className="input" value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Text input" />
                    <button className="button is-link" onClick={addTodo}>
                        Нэмэх
                    </button>
                </div>
            </div>
        </div>
    );
}
