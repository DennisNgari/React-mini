import styled,{css} from "styled-components";
import { lightTheme } from "../../../../../../styles/Theme";
import {IoIosSchool} from "react-icons/io"
import {FcServices} from "react-icons/fc"
import {AiOutlineBarChart} from "react-icons/ai"
import {GiPriceTag} from "react-icons/gi"
import {GoLaw} from "react-icons/go"


export const NavMenu = styled.nav`
display: flex;
align-items: center;
justify-content:center;
width: 100%; 
height: 100%;
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
line-height: 45px;
top: 12vh;
position: absolute;
display: flex;
align-items: center;
flex-direction: column;
overflow: hidden;
margin: auto;
text-align: center;
border-radius: 5px;
transition: all .5s ease;
`
export const DropMenuItem = styled.li`
list-style: none;
color:${lightTheme.bg2};
font-size: 1.7rem;
width: 100%;
:not(:last-child){
    border-bottom: 1px solid gray;
}
 
:hover{
    color:#ffff;
    text-decoration: underline;
}
`
export const DropMenuItemLink = styled.a`
width: 100%;
`

export const NavMenuItemLink = styled.a`
width:100%;
height: 100%;
`
// Mega Menu
export const MegaBox = styled.div`
z-index: 999;
position: absolute;
padding: 0 20px;
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
    line-height: 45px;
`
export const MegaHeader = styled.span`
    color: #ffff;
    font-size: 1.8rem;
    font-weight: bold;
`
export const MegaMenu = styled.ul`
list-style: none;
padding-left: 15px;
padding: 15px;

`
export const MegaMenuListItem = styled.li`
padding: 0 20px;
color: #ffff;
font-size: 1.6rem;
font-weight: normal;
border-left: 1px solid ${lightTheme.overlay};
:hover{
    border-left: 1px solid transparent;
    border-radius: 5px;
    background: #390f7c;
    text-decoration: underline;
}
`
export const MegaMenuItemLink = styled.a``


export const NavMenuItem = styled.li`
padding: 10px;
cursor: pointer;
color: inherit;
border-bottom: 8px solid transparent;
:hover{
   color:#595ab4;
   border-bottom: 8px solid red;
}
&:hover  ${DropMenu}{
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
gap: 10px;
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