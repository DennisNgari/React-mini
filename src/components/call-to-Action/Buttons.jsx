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
padding: .8rem .2rem;
font-weight: bold;
border-radius: .5rem;
border: 2px solid ${lightTheme.bg2};
-webkit-transition: all 0.3s;
-moz-transition: all 0.3s;
font-size: ${props => (props.name === "nav")? "1.2rem" : "1.6rem" };
transition: filter 300ms;
:hover{
    filter: brightness(1.2);
}
`;

// SignIn Btn
export const SignInBtn = styled.button`
${btnReset};
${accessBtns};
background:${lightTheme.buttonSignIn};
color: ${lightTheme.primary};
`

//SignUp Btn
export const SignUpBtn = styled.button`
${btnReset};
${accessBtns};
background: ${lightTheme.hover};
color: ${lightTheme.bg2};

`


