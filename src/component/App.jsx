import React from 'react'
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from './ui/Theme';

function App() {
  return (
      <ThemeProvider theme={Theme}>
        <Hero />
        <Header />
      </ThemeProvider>
  );
}

export default App;
