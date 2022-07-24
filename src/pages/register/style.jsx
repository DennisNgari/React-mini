import styled from "styled-components";
import {lightTheme} from "../../styles/Theme"
import loginSVG from "../../assets/img/login.svg"

export const RegisterContainer = styled.div`
height: 90vh;
width: 100%;
display: flex;
align-items: center; 
justify-content: center;
background-image: linear-gradient(to right,
       ${lightTheme.primaryLinear3}, 
       ${lightTheme.primaryLinear4}),
       url(${loginSVG});
background-size: cover;
background-position:center;
`

export const Form = styled.form`
background: ${lightTheme.bg2};
padding: 0px 50px;
border-radius: 10px;

`
export const SignUpText = styled.h2`
color: ${lightTheme.hover};
text-align: center;
margin-top: 20px;
`
