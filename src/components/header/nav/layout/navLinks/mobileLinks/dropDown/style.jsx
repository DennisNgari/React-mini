import styled from "styled-components";
import { lightTheme } from "../../../../../../../styles/Theme";

export const DropdownContainer = styled.div`
background: ${lightTheme.bg};
white-space: nowrap;
padding: 10px;
border-radius: 10px;
min-width: 100%;
`

export const TreeItemCont = styled.div`
text-align: left;
font-size: 12px;
font-weight: lighter;
color: ${lightTheme.text2};
font-size: 0.7rem;
padding: 0 10px;
`

export const TreeChildCont = styled.div`
margin-top: 10px;
padding-left: 10px;
background: ${lightTheme.bg2};
border-radius: 5px;
`