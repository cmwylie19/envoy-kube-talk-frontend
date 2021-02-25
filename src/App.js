import React, { useState } from "react";
import Header from "./Header";
import Fetch from "./Fetch";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { deepPurple, blue, pink } from "@material-ui/core/colors";

const outerTheme = createMuiTheme({
  typography: {
    fontFamily: "'Truculenta', sans-serif",
  },
  palette: {
    primary: {
      main: blue[400],
      light: blue[50],
      dark: blue[900],
    },
    secondary: pink,
  },
});

const innerTheme = createMuiTheme({
  typography: {
    fontFamily: "'Stick', sans-serif",
  },
  palette: {
    primary: {
      main: blue[400],
      light: blue[50],
      dark: blue[900],
    },
    secondary: deepPurple,
  },
});

function App() {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => setTheme(!theme);
  return (
    <ThemeProvider theme={theme === true ? outerTheme : innerTheme}>
      <Header toggleTheme={toggleTheme} />
      <Fetch />
    </ThemeProvider>
  );
}

export default App;
