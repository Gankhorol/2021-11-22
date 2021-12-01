import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";

function App() {
    const [name, setName] = useState("hi");

    let a = "hello";

    let fooRef = useRef("hello from ref");

    let inputRef = useRef(null);

    console.log(Date.now());
    // console.log(a);
    // console.log(fooRef.current);

    console.log(inputRef.current);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <button onClick={() => (fooRef.current = "hi from ref")}>change a</button>

                <button onClick={() => inputRef.current.focus()}>focus</button>
            </header>
        </div>
    );
}

export default App;
