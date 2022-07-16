// import { useState } from "react"
// import {ArrowContainer, ArrowIcon, DropDownContainer, DropDownLabel, NavMenu, NavMenuItem} from "./style"
// import { navLinkData } from "./navLinkData"
// import { Fragment } from "react"
// import DropDown from "../dropDown/DropDown"


// const NavLinks = () => {
//     const [openDropDown, setOpenDropDown] = useState(null)
//     const openDropDownHandler = (label)=>{
//         if(label === openDropDown) return setOpenDropDown(null);
//         setOpenDropDown(label)
//     }
//     return (
//      <>
//      {navLinkData.map(({link, label,tree},index) => {
//          const isOpen = openDropDown === label;
//          return(
//          <NavMenu key = {index}>
//              {link && <NavMenuItem>{label}</NavMenuItem>}
//              {!link && (<DropDownContainer onClick={() => openDropDownHandler(label)}>
//                  <DropDownLabel isOpen={isOpen}>{label}</DropDownLabel>
//                  <ArrowContainer isOpen={isOpen}>
//                      <ArrowIcon/>
//                  </ArrowContainer>
//              </DropDownContainer>)}
//              {isOpen && (<DropDown tree = {tree}/>)}
//      </NavMenu>
//          );
//      })}
//      </>
//     )
// }

// export default NavLinks
