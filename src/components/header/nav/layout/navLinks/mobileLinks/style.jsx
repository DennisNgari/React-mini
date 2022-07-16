import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { b } from "../../../../../../styles/Responsive";
import { lightTheme } from "../../../../../../styles/Theme";


export const ArrowIcon = styled(IoMdArrowDropdown)`
    display: block;
    margin-left: 4px;
`;

export const NavMenu = styled.ul`
list-style: none;
width: 100%;
justify-content: space-between;
@media ${b.md}{
border-bottom: 2px solid ${lightTheme.overlay};
:last-of-type{
margin-bottom: 20px;
}
padding: 10px ; 

};

`
export const NavMenuItem = styled.li`
width: 100%;
height: 100%;
cursor: pointer;
font-weight: bold;
:hover{
    color: #0026ff;
}

`
export const DropDownContainer = styled.div`
    user-select: none;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    @media ${b.md}{
    display: flex;
    align-items: center;
    justify-content: space-between;
};
`;

export const DropDownLabel = styled.span`
color:inherit;
width: 100%;
font-weight: bold;
:hover{
    color: #0026ff;
}
`

export const ArrowContainer = styled.div`
svg {
    width: 100%;
    height: 100%;
    color: ${({ isOpen }) => (!isOpen ? "inherit" : lightTheme.primary)};
        transform: ${({ isOpen }) => (!isOpen ? "none" : "rotate(180deg)")};
        transition:  .3s ease;
    }
`