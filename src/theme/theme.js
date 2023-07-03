import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

function ThemeProvider({ children }) {
  const themeOptions = {
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
  };

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
export default ThemeProvider;
