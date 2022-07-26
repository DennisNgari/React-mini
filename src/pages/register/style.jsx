import styled from "styled-components";
import {lightTheme} from "../../styles/Theme"
import loginSVG from "../../assets/img/login.svg"
import { b } from "../../styles/Responsive";

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
@media ${b.md}{
    padding: 0 80px;
}
`
export const SignUpText = styled.h2`
color: ${lightTheme.hover};
text-align: center;
margin-top: 20px;
`

export const SocialCont = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center;  
    margin: 10px 0;
`
export const OrCont = styled.div`
margin: 20px 0;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`
export const Hr = styled.hr`
width: 100%;
height: 1px;
border: 0;
border-top: 1px solid #ccc;
`
export const OrText = styled.span`
font-size: 14px;
color: #555353;
`