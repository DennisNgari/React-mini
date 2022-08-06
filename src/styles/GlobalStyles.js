import { createGlobalStyle } from "styled-components";
import { b } from "./Responsive";
import { lightTheme } from "./Theme";

// @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;500&display=swap');
export const GlobalStyles = createGlobalStyle`

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
    html{
        //This defines what 1 rem is

     @media ${b.xxl}{
            font-size:70%;
        } 

    @media ${b.xl}{
        font-size: 62.5%;
    }

    @media ${b.lg}{
        font-size:56.25% ;
    }

    @media ${b.sm}{
        font-size: 50%;  
    }
    
    }
    
`;
