import Articles from "./components/Articles";
import Categories from "./components/Categories";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <div className="container mt-6" style={{ maxWidth: 700 }}>
                <Categories />
                <Articles />
            </div>
        </>
    );
}

export default App;
