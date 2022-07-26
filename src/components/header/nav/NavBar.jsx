import { useState } from "react";
import { useClickOutside } from "../../../hooks/hooks";


import {Wrapper,MenuIcon, NavContainer,Left,Center,Right, MobileLinks, CloseMenu, MobileHamburgerContainer, NavLink,} from "./Style"
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
  const closeHamburger = ()=> setNavbarOpen(false);

//Toggle hamburger open or close when user clicks outside the menu.
let domNode = useClickOutside(()=>{
    setNavbarOpen(false)
})

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
                {user ? (<NavLink to="/login"><SignInBtn>Log Out</SignInBtn></NavLink>):(<><NavLink to="/login"><SignInBtn>Sign In</SignInBtn></NavLink><NavLink to="/register"><SignUpBtn>Sign Up</SignUpBtn></NavLink></>)}
                </Right>

                {/* Mobile View Hamburger */}
                <MobileHamburgerContainer onClick={handleClick}>
                {navbarOpen ? <CloseMenu /> : <MenuIcon />}
                </MobileHamburgerContainer>

            </Wrapper>
        </NavContainer>

        
        <MobileLinks ref={domNode} navbarState = {`${navbarOpen ? "showMenu":""}`}>
            <Mobile />
            {user ? (<NavLink to="/login"><SignInBtn>Log Out</SignInBtn></NavLink>):(<><NavLink to="/login"><SignInBtn onClick={closeHamburger}>Sign In</SignInBtn></NavLink><NavLink to="/register"><SignUpBtn onClick={closeHamburger}>Sign Up</SignUpBtn></NavLink></>)}
        </MobileLinks>
        </>
        
    )
}

export default NavBar
