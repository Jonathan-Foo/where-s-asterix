import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,:before,:after{
        margin: 0;
        padding: 0;
    } 

    html {
        position: relative;
        min-height: 100%;
      }

    body {
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
        
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`
export default GlobalStyle;
