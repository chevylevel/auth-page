import React from "react";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import themeSettings from './theme';

export const theme = createTheme(themeSettings);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RegisterPage />
    </ThemeProvider>
  );
}

export default App;
