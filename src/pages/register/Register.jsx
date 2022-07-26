import {useState} from 'react'
import { SignUpBtn } from '../../components/call-to-Action/Buttons'
import FormInput from '../../components/formInput/FormInput'
import { AccessText, GoogleIcon, LoginOptionCont } from '../login/style'

import {Form, Hr, OrCont, OrText, RegisterContainer, SignUpText, SocialCont } from './style'

const Register = () => {
    const [values, setValues] = useState({
        fullName:"",
        birthDay:"",
        email:"",
        userName:"",
        password:"",
        confirmPassword:"",
    });

    const handleSubmit =(e)=>{
        e.preventDefault();
    }

    const onChange = (e)=>{
        setValues({...values, [e.target.name]: e.target.value})
    }

    // User Input Data.
    const InputData=[
        {
        id:1,
        name:"fullName",
        type:"text",
        placeholder:"FullName",
        errorMessage:"* Name should be between 3-16 characters and shouldn't contain any special character!",
        label:"fullName",
        pattern:"^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$",
        required:true,
        
        
    },
    {
        id:2,
        name:"birthDay",
        type:"date",
        errorMessage:"* Date CAN NOT be empty!",
        placeholder:"Birth-Day",
        label:"BirthDay",
        required:true,
    },
    {
        id:3,
        name:"email",
        type:"email",
        placeholder:"Email",
        errorMessage:"* Email should be a valid email address!",
        label:"email",
        required:true,
    },
    {
        id:4,
        name:"userName",
        type:"text",
        placeholder:"UserName",
        errorMessage:"* UserName should be 3-16 characters and shouldn't include any special characters!",
        label:"UserName",
        pattern:"^[A-Za-z0-9]{3,16}$",
        required:true,

    },
    {
        id:5,
        name:"password",
        type:"password",
        placeholder:"Password",
        errorMessage:"* Password should be between 8-20 characters. MUST include 1 uppercase and lowe case letter, 1 digit and 1 special character! (eg. asdASD123*)",
        label:"Password",
        pattern:"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$",
        required:true,
    },
    {
        id:6,
        name:"confirmPassword",
        type:"password",
        placeholder:"Confirm Password",
        errorMessage:"* Passwords DO NOT match!",
        label:"ConfirmPassword",
        pattern:values.password,
        required:true,
    },
]



    return (
   
        <RegisterContainer>
            <Form onSubmit={handleSubmit} >
                <SignUpText> Join Expert Professor</SignUpText>
                            {/* Social SignUp */}
                            <SocialCont>
                    <LoginOptionCont style={{maxWidth:"70%", justifyContent:"space-around"}}>
                        <GoogleIcon/>
                        <AccessText>Sign Up With Google</AccessText>
                    </LoginOptionCont>
                            </SocialCont>
                    {/* or */}
                    <OrCont>
                        <Hr/> <OrText>Or</OrText> <Hr/>
                    </OrCont>

                    <AccessText style={{marginBottom:"20px"}}>Sign Up With Email</AccessText>

                {InputData.map((input)=>(
                <FormInput 
                names={input.label}
                    key={input.id} 
                    {...input} 
                    value={values[input.name]} 
                    onChange={onChange}
                    
                 />
                ))}
                <SignUpBtn style={{margin:"15px 0 30px 0", fontSize:"20px"}}>Sign Up</SignUpBtn>
            </Form>
        </RegisterContainer> 
     
    )
}

export default Register
