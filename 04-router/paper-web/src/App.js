import "bulma/css/bulma.min.css";

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
    return <div className="title">About</div>;
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
