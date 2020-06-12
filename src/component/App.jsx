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
      {[...new Array(1200)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
      </ThemeProvider>
  );
}

export default App;
