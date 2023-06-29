import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import GridJobCard from "./components/GridJobCard";

const theme = createTheme({
  palette: {
    primary: {
      main: "#272727",
      secondary: "#363636",
      light: "#494949",
      white: "#fff",
    },
    secondary: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
    },
    button: "#ffa726",

    background: {
      default: "#121212",
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchAppBar />
        <GridJobCard />
      </ThemeProvider>
    </div>
  );
}

export default App;
