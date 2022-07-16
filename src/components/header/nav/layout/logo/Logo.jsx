import { LogoContainer, LogoImage } from "./style"
import logo from "../../../../../assets/img/expertprofessor.jpeg"

const Logo = () => {
    return (
        <LogoContainer to="/">
            <LogoImage src = {logo}/>
        </LogoContainer>
        
    )
}

export default Logo
