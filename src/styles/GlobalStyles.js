import { createGlobalStyle } from "styled-components";
import { lightTheme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;500&display=swap');

    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background:linear-gradient(0.25turn, ${lightTheme.bg}, ${lightTheme.bg2}) ;
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
        overflow: overlay;
        /* width */
        ::-webkit-scrollbar {
        width: 8px;
        }
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: ${lightTheme.hover};
        border-radius: 10px;
        }
        }; 
    

    nav{
    font-family: 'Exo 2', sans-serif;
  }

`;
