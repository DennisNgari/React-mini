import styled,{css} from "styled-components";
import { lightTheme } from "../../../../../../styles/Theme";
import {IoIosSchool} from "react-icons/io"
import {FcServices} from "react-icons/fc"
import {AiOutlineBarChart} from "react-icons/ai"
import {GiPriceTag} from "react-icons/gi"
import {GoLaw} from "react-icons/go"
import { b } from "../../../../../../styles/Responsive";


export const NavMenu = styled.nav`
display: flex;
align-items: center;
justify-content:center;
width: 100%; 
height: 100%;
/* position: relative; */
`

export const NavMenuList = styled.ul`
list-style: none;
color: ${lightTheme.primary2};
font-size: 2rem;
display: flex;
align-items: center;
justify-content:space-around;
width: 100%; 
font-weight: lighter;

`

export const DropMenu = styled.ul`
z-index: 999;
background: ${lightTheme.primary};
opacity: 0;
visibility: hidden;
min-width: 150px;
line-height: 4.5rem;
top: 12vh;
position: absolute;
display: flex;
align-items: center;
flex-direction: column;
overflow: hidden;
margin: auto;
text-align: center;
border-radius: .5rem;
transition: all .5s ease;
`
export const DropMenuItem = styled.li`
list-style: none;
color:${lightTheme.bg2};
font-size: 1.7rem;
width: 100%;
:not(:last-child){
    border-bottom: .1rem solid gray;
}
 
:hover{
    border-radius: 5px;
    background: #390f7c;
    color: #4ac719;
}
`
export const DropMenuItemLink = styled.a`
width: 100%;
`

export const NavMenuItemLink = styled.a`
width:100%;
height: 100%;
text-decoration: none;
color: inherit;
`
// Mega Menu
export const MegaBox = styled.div`
z-index: 999;
position: absolute;
padding: 0rem 2rem;
background: ${lightTheme.primary};
width: 100%;
left: 0;
top: 12vh;
visibility: hidden;
transition: all .3s ease; 
`


export const MegaContent = styled.div`
display: flex;
width: 100%;
top: 20vh;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;

`
export const MegaRow = styled.div`
    line-height: 4.5rem;
`
export const MegaHeader = styled.span`
    color: #ffff;
    font-size: 1.8rem;
    font-weight: bold;
`
export const MegaMenu = styled.ul`
list-style: none;
padding: 1rem;

`
export const MegaMenuListItem = styled.li`
padding: 0 20px;
color: #ffff;
font-size: 1.6rem;
font-weight: normal;
border-left: .1rem solid ${lightTheme.overlay};
:hover{
    border-left: 1px solid transparent;
    border-radius: 5px;
    background: #390f7c;
    color: #4ac719;
}
`
export const MegaMenuItemLink = styled.a``


export const NavMenuItem = styled.li`
padding: 1rem;
cursor: pointer;
color: inherit;
&:hover{
    color:#1b1dbd;
}
&:hover:before{
        content: "";
        position: absolute;
        top: 8vh; 
        width: 3rem;
        height: .5rem;
        background: red;
}

&:hover ${DropMenu}{
    top: 10vh;
    opacity: 1;
    visibility: visible;
    }
    &:hover  ${MegaBox}{
    top: 10vh;
    opacity: 1;
    visibility: visible;
    }
`

// Icons
export const iconProps = css`
font-size: 2rem;
color: ${lightTheme.bg};
`
export const IconCont = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`
export const ProductIcon = styled(IoIosSchool)`
${iconProps}
`
export const ServiceIcon = styled(FcServices)`
${iconProps};
` 
export const FinanceIcon = styled(AiOutlineBarChart)`
${iconProps};
color: ${lightTheme.buttonSignIn};
`
export const PriceIcon = styled(GiPriceTag)`
${iconProps};
color: ${lightTheme.buttonSignInHover};

`
export const LegalIcon = styled(GoLaw)`
${iconProps};
color: ${lightTheme.bg2};

`