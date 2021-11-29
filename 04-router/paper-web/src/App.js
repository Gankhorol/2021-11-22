import "bulma/css/bulma.min.css";
import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, Link, useParams, useSearchParams, useNavigate } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="buttons">
                <Link to="/" className="button">
                    Home
                </Link>
                <Link to="/about" className="button">
                    About
                </Link>
                <Link to="/categories" className="button">
                    Categories
                </Link>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="categories" element={<Categories />} />
                <Route path="blog/:blogId" element={<OneBlog />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

function Home() {
    const navigate = useNavigate();

    return (
        <div className="title">
            Home
            <button className="button" onClick={() => navigate("/categories?name=Politics")}>
                Go to Categories using button
            </button>
        </div>
    );
}

function About() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    console.log("every render");

    useEffect(() => {
        console.log("amidral n ehellee:", Date.now());
        const myInterval = setInterval(function () {
            console.log("inverval", Date.now());
        }, 1000);

        return () => {
            clearInterval(myInterval);
            console.log("amidral duuslaa:", Date.now());
        };
    }, []);

    useEffect(() => {
        console.log("buh oorchlolt:", Date.now());
    });

    useEffect(() => {
        console.log("counter1 oorchlolt:", Date.now());
        // database ruu counter1 hadgal
    }, [counter1]);

    return (
        <>
            <div className="title">About </div>

            <button className="button" onClick={() => setCounter1(counter1 + 1)}>
                Increment
            </button>
            <div className="subtitle">Counter1: {counter1}</div>

            <button className="button" onClick={() => setCounter2(counter2 + 10)}>
                Increment
            </button>
            <div className="subtitle">Counter2: {counter2}</div>
        </>
    );
}

function Categories() {
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get("name"));

    function filter() {
        setSearchParams({ name: "Sarnai", query: "Bold" });
    }

    return (
        <div className="title">
            Categories
            <button className="button is-small is-text" onClick={filter}>
                Filter
            </button>
        </div>
    );
}

function NotFound() {
    return <div className="title">404</div>;
}

function OneBlog() {
    const params = useParams();
    const { blogId } = params;

    return <div className="title">OneBlog: {blogId}</div>;
}

export default App;
