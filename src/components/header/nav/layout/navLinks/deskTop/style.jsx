import styled from "styled-components";
import { lightTheme } from "../../../../../../styles/Theme";
import { DropDownContainer } from "../style";


export const NavMenu = styled.nav`
display: flex;
align-items: center;
justify-content:center;
width: 100%; 
height: 100%;
`

export const NavMenuList = styled.ul`
list-style: none;
cursor: pointer;
color: ${lightTheme.primary2};
font-size: 20px;
display: flex;
align-items: center;
justify-content:space-around;
width: 100%; 
font-weight: bold;

`

export const DropMenu = styled.ul`
background: ${lightTheme.primary};
opacity: 0;
visibility: hidden;
min-width: 150px;
line-height: 45px;
top: 10vh;
position: absolute;
display: flex;
align-items: center;
flex-direction: column;
padding: 10px;
overflow: hidden;
margin: auto;
border-radius: 5px;
transition: all .3s ease; 
`
export const DropMenuItem = styled.li`
list-style: none;
color:${lightTheme.bg2};
font-size: 17px;
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
position: sticky;
padding: 0 20px;
top: 10vh;
background: ${lightTheme.primary};
width: 100%;
left: 0;
position: absolute;
visibility: hidden;
transition: all .3s ease; 
`


export const MegaContent = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
align-items: center;
    justify-content: space-between;
`
export const MegaRow = styled.div`
    line-height: 45px;
`
export const MegaHeader = styled.span`
    color: #ffff;
    font-size: 20px;
    font-weight: bold;
`
export const MegaMenu = styled.ul`
list-style: none;
padding-left: 15px;
`
export const MegaMenuListItem = styled.li`
padding: 0 20px;
color: #ffff;
font-weight: normal;
:hover{
    text-decoration: underline;
}
`
export const MegaMenuItemLink = styled.a``


export const NavMenuItem = styled.li`
padding: 10px;
color: inherit;
:hover{
    text-decoration: underline;
   color:#595ab4;
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