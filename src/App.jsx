import React from "react";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1440,
      desktop: 1920,
    },
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#526ED3',
      dark: '#002884',
      contrastText: '#fff',
    },
  }
});

function App() {
  return <ThemeProvider theme={theme}>
    <RegisterPage />
  </ThemeProvider>
}

export default App;
