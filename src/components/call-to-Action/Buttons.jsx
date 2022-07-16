import styled ,{css} from "styled-components"
import { b } from "../../styles/Responsive";
import { lightTheme } from "../../styles/Theme";

// CTA Button Reset.
const btnReset = css`
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    letter-spacing: inherit;
    font-size: inherit;
    padding: 0;
`
// SignIn/Up btn Props
const navBtnProps = css`
width: 100%;
display: inline-block;
padding: 10px;
font-weight: 700;
border-radius: 5px;
border: 2px solid ${lightTheme.bg2};
-webkit-transition: all 0.3s;
-moz-transition: all 0.3s;
transition: all 0.3s;
background: ${lightTheme.primary};
color: ${lightTheme.textInvert};
:hover{
    background: ${lightTheme.hover};
    color: ${lightTheme.bg2};
}
`;

//Nav btns.
// Sign In/Up Btns.
export const NavBtn = styled.button`
${btnReset}
${navBtnProps}
`;



