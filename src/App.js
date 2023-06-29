import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import JobCard from "./components/JobCard";
import jobs from "./jobs.json";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Container, CssBaseline, Pagination } from "@mui/material";
import { grey } from "@mui/material/colors";
import PaginationBox from "./components/PaginationBox";

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
        <Container
          sx={{
            marginTop: 10,
          }}
        >
          <Grid container spacing={2}>
            {jobs.slice(0, 5).map((job) => (
              <Grid key={job.id} item xs={12} md={4}>
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <PaginationBox />
      </ThemeProvider>
    </div>
  );
}

export default App;
