import styled from "styled-components";
import { lightTheme } from "../../styles/Theme";
import {AiFillTwitterSquare}from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"


export const FooterWrapper = styled.footer`
    width: 100vw;
    background: ${lightTheme.primary};  
    height: auto;
    padding: 50px 100px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
`

export const LeftSection = styled.div`
    margin-right: 30px;
    width: 40%;
    position: relative;
    color: #ffff;
    font-weight: 500;
    margin-bottom: 15px;
`
export const HeadingFooter = styled.span`
    position: relative;
    color: #ffff;
    font-weight: 500;
    margin-bottom: 15px;
    :before{
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 50px;
        height: 2px;
        background: red;
    }
`
export const ParagraphFooter = styled.p`
color: ${lightTheme.textInvert};
margin-top: 20px;
`
export const SocialIconList = styled.ul`
display: flex;
flex-direction: row;
margin-top: 10px;
`
export const SocialIconListItem = styled.li`
list-style: none;
`
export const SocialIconLink = styled.a`
    font-size: 40px;
    color: ${lightTheme.bg};
    :hover{
        color:${lightTheme.bg2}
    }
`
export const Twitter = styled(AiFillTwitterSquare)`
 font-size: 40px;
`
export const Facebook = styled(AiFillFacebook)`

`

export const LinkedIn = styled(AiFillLinkedin)``





