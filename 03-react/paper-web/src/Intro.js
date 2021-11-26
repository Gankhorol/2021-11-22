import "bulma/css/bulma.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Footer, Menu, Sidebar } from "./components/Footer";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    function greetings() {
        console.log("Hello");
    }

    function increment() {
        setCount(count + 13);
    }

    return (
        <div>
            <Header title="Garchig" count={10} hobbies={["tennis", "ball"]} person={{ name: "Bold", age: "12" }} />
            <Main>
                <h1 style={{ backgroundColor: "#E2FF4A" }}>
                    Main content {count}{" "}
                    <button className="button is-success is-large is-outlined is-rounded" onClick={increment}>
                        increment
                    </button>
                </h1>
                <h2 style={{ color: "rgb(50,50,10)", backgroundColor: "rgba(30,0,30,0.5)", opacity: 0.5 }}>Title2</h2>
            </Main>

            <Footer onGreetings={greetings} />
        </div>
    );
}

export default App;
