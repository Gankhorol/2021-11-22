import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Categories from "./components/Categories";
import { pink, teal } from "@mui/material/colors";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: teal[500],
        },
        secondary: {
            main: pink[500],
        },
    },
});

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />

                <Routes>
                    <Route path="/" element={<div>Home</div>} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="articles" element={<div>Articles</div>} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
