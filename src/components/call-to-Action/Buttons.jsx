import styled, {css} from "styled-components"
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
const accessBtns = css`
width: 100%;
display: inline-block;
padding: 10px;
font-weight: 700;
border-radius: 5px;
border: 2px solid ${lightTheme.bg2};
-webkit-transition: all 0.3s;
-moz-transition: all 0.3s;
transition: all 0.3s;
`;

// SignIn Btn
export const SignInBtn = styled.button`
${btnReset};
${accessBtns};
background:${lightTheme.buttonSignIn};
color: ${lightTheme.primary};
:hover{
    background: ${lightTheme.buttonSignInHover};
    color: ${lightTheme.bg2};
}
`

//SignUp Btn
export const SignUpBtn = styled.button`
${btnReset};
${accessBtns};
background: ${lightTheme.hover};
color: ${lightTheme.bg2};
:hover{
    background: ${lightTheme.primary};
    color: ${lightTheme.bg2};
}
`


