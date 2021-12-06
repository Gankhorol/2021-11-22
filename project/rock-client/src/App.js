import Articles from "./components/Articles";
import OneArticle from "./components/OneArticle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Link, useParams, useSearchParams, useNavigate } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <div className="container mt-6 mb-6" style={{ maxWidth: 1000 }}>
                    <Routes>
                        <Route path="/" element={<Articles />} />
                        <Route path="blog/:blogId" element={<OneArticle />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
