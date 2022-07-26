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
font-size: 12px;
color: ${lightTheme.text};
`

export const ErrorText = styled.span`
font-size: 12px;
padding: 3px;
color: red;
display: none;

`

export const Checked = styled(BsFillPatchCheckFill)`
position: absolute;
right: -20px;
bottom: 25px;
color: green;
transition: all .3s ease;
display: none;
`
export const RegisterInput = styled.input`
padding: 15px;
margin: 10px 0;
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
    box-shadow: 0 0 5px ${lightTheme.primary2};
}
`
