
import { ThemeProvider } from 'styled-components'
import { Button } from "./components/Button";


import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/globals';

export function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
   

      <GlobalStyle />
   </ThemeProvider>
  );
}
