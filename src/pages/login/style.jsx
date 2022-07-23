import styled from "styled-components";
import { lightTheme } from "../../styles/Theme";
import loginSVG from "../../assets/img/login.svg"
import { b } from "../../styles/Responsive";

export const LoginContainer = styled.div`
    background: var(--color-secondary-light-3);
    height: 90vh;
    width: 100%;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media ${b.lg}{
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
             @media ${b.lg}{
                height: 80vh;
        width: 90%;
       display: flex;
       flex-direction: column;
       margin: 40px 0 0 0;
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
@media ${b.lg}{
    display: none;
}
`

export const TextBox = styled.div`
 text-align: center;
`
export const LoginText = styled.h2`
color: ${lightTheme.primary};
margin-top: 20px;
`

export const ContentRight = styled.div`
    background: ${lightTheme.bg2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${b.lg}{
       height: 100%;
       width: 100%;

    }
`

export const Form = styled.form`
& > * {
    margin-top: 30px;
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
    left: 0px;
    transition: all .3s ease;
`

export const LoginInput= styled.input`
    height: 50px;
    width: 100%;
    border: none;
    padding-top: 20px ;
    outline: none;
    font-size: 20px; 
    background-color: inherit;
    :focus + ${LoginLabel} ${LoginLabelName},
    :valid + ${LoginLabel} ${LoginLabelName}{
    transform: translateY(-110%);
    font-size: 14px;
    color: ${lightTheme.hover};
    };
`;

export const RememberContainer = styled.div`
 margin: 20px 0px 20px 0;
`
export const RememberInput = styled.input`
    margin-right: 10px;
    transform : scale(1.5);
`
export const RemLabel  = styled.label``

export const SignInBtn = styled.div``