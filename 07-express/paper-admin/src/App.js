import { useEffect, useState } from "react";

function App() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/categories")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setList(data);
            });
    }, []);

    return (
        <div className="App">
            <button className="button">Button</button>
            <div className="container" style={{ maxWidth: 400 }}>
                {list.map((item) => (
                    <div key={item.id} className="box">
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
