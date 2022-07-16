import styled from "styled-components";
import { b } from "../../../../../styles/Responsive";
import { lightTheme } from "../../../../../styles/Theme";

export const DropdownContainer = styled.div`
background: ${lightTheme.bg};
white-space: nowrap;
padding: 10px;
border-radius: 10px;
@media ${b.md} {
 font-size: 14px;
 font-weight: lighter;
        min-width: 100%;
    }
`

export const TreeItemCont = styled.div`
text-align: left;
padding: 0 10px;
`

export const TreeChildCont = styled.div`
margin-top: 10px;
padding-left: 10px;
background: ${lightTheme.bg2};
border-radius: 5px;
`