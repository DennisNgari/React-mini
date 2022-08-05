import {useState} from 'react'
import { Checked, ErrorText, FormInputWrapper, FormLabel, RegisterInput, Required } from './style'

const FormInput = (props) => {
    // When the user clicks outside the input, validate  their entries.
    // const [focused, setFocused] = useState(false)
    const [list, setList] = useState(false)
    const handleFocus =(e)=>{
        setList(true);
    }

    // Destructure the Props.
    const {label,errorMessage,onChange, id, ...inputProps} = props;

    return (
        <FormInputWrapper >
            <FormLabel>{label}</FormLabel>
            <RegisterInput {...inputProps}
            onChange={onChange} 
            onBlur={handleFocus} 
            list= {list.toString()}
            onFocus = {()=> inputProps.name === "confirmPassword" && setList(true)}
            />
            <Required/>
            <Checked/>
            <ErrorText>{errorMessage}</ErrorText>
        </FormInputWrapper>
    )
}

export default FormInput
