import { useState } from 'react'
import { NavBtn } from '../../components/call-to-Action/Buttons'
import { 
    Show,
    Hide,
    ContentLeft,
    ContentRight,
    Form,
    LoginContainer,
    LoginForm,
    LoginInput,
    LoginLabel,
    LoginLabelName,
    LoginText,
    LoginWrapper,
    RememberContainer,
    RememberInput,
    RemLabel,
    SignInBtn,
    TextBox, 
    PasswordShowHideCont
    } from './style'



const Login = () => {
    const [showPassword, setshowPassword] = useState(false)
    const toogleIcon =()=>{setshowPassword(!showPassword)}
    return (
        <LoginContainer>
            <LoginWrapper>
                {/* Left */}
                <ContentLeft>
                    <TextBox><LoginText>Welcome Back</LoginText></TextBox>
                </ContentLeft>

                {/* Right */}
                <ContentRight>
                    <LoginText> Sign In</LoginText>

                <Form>
                <LoginForm>
                    <LoginInput
                    type="email"
                    name="email"
                    autocomplete="off"
                    required
                    />
                    <LoginLabel>
                        <LoginLabelName>User Name</LoginLabelName>
                    </LoginLabel>
                </LoginForm>

                <LoginForm>
                    <PasswordShowHideCont onClick = {toogleIcon}>
                    {showPassword ? (<Hide/>) : (<Show/>)}
                    </PasswordShowHideCont>
                    <LoginInput
                    type={ `${showPassword ? "text":"password"}`}
                    name="password"
                    autocomplete="off"
                    required
                    />
                    <LoginLabel>
                        <LoginLabelName>Password</LoginLabelName>
                    </LoginLabel>
                </LoginForm>

                {/* Remember Me */}
                <RememberContainer>
                    <RememberInput type="checkbox"/>
                    <RemLabel htmlFor="rememberMe"> Remember Me</RemLabel>
                </RememberContainer>
                
                <SignInBtn>
                    <NavBtn>Sign In</NavBtn>
                </SignInBtn>
                </Form>

                </ContentRight>
            </LoginWrapper>
        </LoginContainer>
    )
}

export default Login
