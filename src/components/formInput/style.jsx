import styled from "styled-components";
import { b } from "../../styles/Responsive";
import { lightTheme } from "../../styles/Theme";
import {BsFillPatchCheckFill} from "react-icons/bs"

export const FormInputWrapper = styled.div`
display: flex;
flex-direction: column;
width: 400px;
position: relative;
@media ${b.lg}{
    width: 350px;
}
@media ${b.md}{
    width: 300px;
}
`
export const FormLabel = styled.label`
font-size: 1.3rem;
color: ${lightTheme.text};
`

export const ErrorText = styled.span`
font-size: 1.2rem;
padding: .3rem;
color: red;
display: none;

`

export const Checked = styled(BsFillPatchCheckFill)`
position: absolute;
right: -2rem;
bottom: 2.5rem;
color: green;
transition: all .3s ease;
display: none;
`
export const RegisterInput = styled.input`
padding: 1.5rem;
margin: 1rem 0rem;
border-radius: 5px;
border: 1px solid ${lightTheme.overlay};
:invalid[list="true"] ~ ${ErrorText}{
    display: block;
}
:invalid[list="true"]{
    border: 1px solid red;
}
:valid[list="true"] ~ ${Checked}{
    display: block;
}
:focus{
    outline: none;
    border:1px solid ${lightTheme.primary2};
    box-shadow: 0 0 .5rem ${lightTheme.primary2};
}
`
