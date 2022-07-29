import styled,{css} from "styled-components";
import {b} from "../../../styles/Responsive"
import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import { lightTheme } from "../../../styles/Theme";
import { NavLink as Link } from "react-router-dom";



// MobileIcon properties
const iconProps = css`
  display: none;
  color: ${lightTheme.primary2};
  z-index: 1000;
  @media ${b.lg}{
    display: block;
    cursor:pointer;
    font-size: 3rem;
    justify-content: space-between;
    right:1rem;
};
`

// Open Menu Icon
export const MenuIcon = styled(FaBars)`
${iconProps}
`;

// Close Menu Icon
export const CloseMenu = styled(AiOutlineClose)`
${iconProps}
position:fixed;
`;


//Nav Layout.
export const NavContainer = styled.div`
border-bottom: .1rem solid ${lightTheme.overlay};
  width: 100%;
  height: 10vh;
  line-height: 6.5rem;
`;

export const Wrapper = styled.nav`
    height: 100%;
    max-width: 70%;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    @media ${b.lg}{
    display: flex;
    padding: 1rem;
    max-width: 100%;
    justify-content: space-between;
};
`;

export const Left = styled.div`
width: 10%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
export const Center = styled.nav`
width: 80%;
height: 100%;
@media ${b.lg}{
    display: none;
};
`
export const Right = styled.div`
width: 20%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
@media ${b.lg}{
    display: none;
};
@media ${b.xl}{
    width: 15%;
};
`
export const MobileHamburgerContainer = styled.div`
height:100%;
display: flex;
justify-content: center;
align-items: center;
`
export const MobileLinks = styled.div`
display: none;
@media ${b.lg}{
        position: fixed;
        height: 100%;
        width: 100%;
        max-width: 35rem;
        background: ${lightTheme.bg2};
        display: inline-block;
        top: 0;
        right: 0;
        overflow-y: auto;
        line-height: 5rem;
        padding: 5rem 1rem;
        box-shadow: 0 15px 15px rgba(0,0,0,.15);
        transform:  ${props=> (props.navbarState === "showMenu")&& "translateX(0%)"}; 
        transition: .15s ease-in;
        &::-webkit-scrollbar{
            width: 0;
        }; 
        z-index: 999;
        transform:  ${props=> (props.navbarState !== "showMenu")&& "translateX(100%)"};
        opacity: 1;
  }
`

export const NavLink = styled(Link)``