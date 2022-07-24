import {useState} from 'react'
import { ErrorText, FormInputWrapper, FormLabel, RegisterInput } from './style'

const FormInput = (props) => {
    // When the user clicks outside the input, validate  their entries.
    const [focused, setFocused] = useState(false)
    const handleFocus =(e)=>{
        setFocused(true);
    }

    // Destructure the Props.
    const {label,errorMessage,onChange, id, ...inputProps} = props;

    return (
        <FormInputWrapper>
            <FormLabel>{label}</FormLabel>
            <RegisterInput {...inputProps} 
            onChange={onChange} 
            onBlur={handleFocus} 
            focused={focused.toString()}
            />
            <ErrorText>{errorMessage}</ErrorText>
        </FormInputWrapper>
    )
}

export default FormInput
