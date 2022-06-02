import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';
import GlobalStyle from './theme/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <GlobalStyle />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);




