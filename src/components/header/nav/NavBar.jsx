import { useState } from "react";

import {Wrapper,MenuIcon, NavContainer,Left,Center,Right, MobileLinks, CloseMenu, MobileHamburgerContainer,} from "./Style"
import {SignInBtn, SignUpBtn} from "../../call-to-Action/Buttons"
import Logo from "./layout/logo/Logo";
import DeskTopLinks from "./layout/navLinks/deskTop/DeskTopLinks";
import Mobile from "./layout/navLinks/mobileLinks/Mobile";




const NavBar = () => {

      //*******************//
  //*  Hamburger       //
  //*******************//
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClick = () => setNavbarOpen(!navbarOpen);
//   const closeMobileView = () => setNavbarOpen(false);

  //*******************//
  //* End of hamburger Menu.
  //*******************//

const user = false;
    return (
        <>
        <NavContainer >
            <Wrapper >
                {/* Left Section */}
                <Left>
                <Logo />
                </Left>

                {/* Middle Section */}
                <Center>
                <DeskTopLinks/>
                </Center>

                {/* Right Section */}
                <Right>
                {user ? (<SignInBtn>Log Out</SignInBtn>):(<><SignInBtn>Sign In</SignInBtn><SignUpBtn>Sign Up</SignUpBtn></>)}
                </Right>

                {/* Mobile View Hamburger */}
                <MobileHamburgerContainer onClick={handleClick}>
                {navbarOpen ? <CloseMenu /> : <MenuIcon />}
                </MobileHamburgerContainer>

            </Wrapper>
        </NavContainer>

        
        <MobileLinks navbarState = {`${navbarOpen ? "showMenu":""}`}>
            <Mobile/>
            {user ? (<SignInBtn>Log Out</SignInBtn>):(<><SignInBtn>Sign In</SignInBtn><SignUpBtn>Sign Up</SignUpBtn></>)}
        </MobileLinks>
        </>
        
    )
}

export default NavBar
