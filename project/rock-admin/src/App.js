import CssBaseline from "@mui/material/CssBaseline";

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
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Categories />
        </ThemeProvider>
    );
}

export default App;
