import styled from "styled-components";
import { lightTheme } from "../../styles/Theme";
import loginSVG from "../../assets/img/login.svg"
import { b, } from "../../styles/Responsive";
import {BiHide} from "react-icons/bi"
import {BiShow} from "react-icons/bi"
import {FcGoogle} from "react-icons/fc"

export const Show = styled(BiShow)`
font-size: 2rem;
${lightTheme.primaryLinear}
`
export const Hide = styled(BiHide)`
font-size: 2rem;
${lightTheme.primaryLinear}
`
export const PasswordShowHideCont = styled.div`
position: absolute;
right: 10px;
bottom: 10px;
cursor: pointer;
`

export const LoginContainer = styled.div`
    height: 90vh;
    width: 100%;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media ${b.md}{
                height: 90vh;
                
    }
`
export const LoginWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 50% 50%;
    height: 80vh;
    width: 80%;
    overflow: hidden;
    border-radius: 30px;
    background: #f0f0f0;
    box-shadow:  7px 7px 9px #b6b6b6,
            -7px -7px 9px #ffffff;
             @media ${b.md}{
                max-height: 80%;
                width: 90%;
                display: flex;
                flex-direction: column;
                /* margin: 20px 0 0 0; */
                align-items: center;   
                border-radius: 30px;
                background: #f0f0f0;
                box-shadow:  7px 7px 9px #b6b6b6,
                -7px -7px 9px #ffffff;
    }
`

export const ContentLeft = styled.div`
    background-image: linear-gradient(to right,
       ${lightTheme.primaryLinear}, 
       ${lightTheme.primaryLinear2}),
       url(${loginSVG});
background-size: cover;
background-position: center;
padding: 10px;
@media ${b.md}{
    display: none;
}
`

export const TextBox = styled.div`
 text-align: center;
`
export const LoginText = styled.h2`
color: ${lightTheme.primary};
margin-top: 20px;
font-size:2.4rem ;
`
export const LoginOptionCont  = styled.div`
border: 2px solid ${lightTheme.overlay};
padding: 0 10px;
margin-top: 20px;
min-width: 35%;
min-height: 50px;
border-radius: 10px;
display: flex;
align-items: center;
gap: 20px;
cursor: pointer;
:hover{
    border: 2px solid ${lightTheme.hover}; 
}
`
export const GoogleIcon = styled(FcGoogle)`
font-size: 3rem;
`
export const AccessText = styled.h4`
color: ${lightTheme.primary2};
align-items: center;
font-size: 1.3rem;
`



export const ContentRight = styled.div`
    background: ${lightTheme.bg2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${b.md}{
       height: 100%;
       width: 100%;

    }
`

export const Form = styled.form`
& > * {
    margin-top: 20px;
}
:last-child{
        margin-bottom: 20px;
    }
`
export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 50%;
    position: relative;
    overflow: hidden;
`;


export const LoginLabel = styled.label`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
    border-bottom: 1px solid ${lightTheme.overlay};
    &:after{
        content: "";
        position: absolute;
        height: 100%;
        left: 0px;
        bottom: -2px;
        width: 100%;
        border-bottom: 3px solid var(--color-primary-dark-4);   
        transform: translateX(-100%);
        transition: all .3s ease;   
    }
`
export const LoginLabelName = styled.span`
    position: absolute;
    bottom: 5px;
    font-size: 1.6rem;
    left: 0px;
    transition: all .3s ease;
`

export const LoginInput= styled.input`
    height: 50px;
    width: 100%;
    border: none;
    padding-top: 20px ;
    outline: none;
    font-size: 1.3rem;
    background-color: inherit;
    :focus + ${LoginLabel} ${LoginLabelName},
    :valid + ${LoginLabel} ${LoginLabelName}{
    transform: translateY(-110%);
    font-size: 1.4rem;
    color: ${lightTheme.hover};
    };
`;

export const ForgotPassContainer = styled.div`
 margin: 20px 0px 20px 0;
 font-size: 1.3rem;
`
export const ForgotLabel  = styled.span`
color: ${lightTheme.SignInBtnBox};
cursor: pointer;
text-decoration: underline;
:hover{
    text-decoration: underline;
color: ${lightTheme.primary};
}
`

export const SignInBtnBox = styled.div``