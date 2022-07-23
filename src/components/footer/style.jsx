import styled from "styled-components";
import { lightTheme } from "../../styles/Theme";
import {AiFillTwitterSquare}from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {BiCurrentLocation} from "react-icons/bi"
import {BiMailSend} from "react-icons/bi"
import {BsFillTelephoneOutboundFill} from "react-icons/bs"
import { b } from "../../styles/Responsive";


export const FooterWrapper = styled.footer`
    width: 100%;
    background: ${lightTheme.primary};  
    height: auto;
    padding: 20px 50px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
export const FooterContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    @media ${b.lg}{
        flex-direction: column;
    }
`

export const Section = styled.div`
    margin-right: 30px;
    width: 33.333%;
    position: relative;
    color: #ffff;
    font-weight: 500;
    margin-bottom: 15px;
    @media ${b.lg}{
        width: 100%;
    }
`
export const LeftSection = styled(Section)`
@media ${b.md}{
    display:none;
}
`
export const HeadingFooter = styled.span`
    position: relative;
    color: #ffff;
    font-weight: 500;
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
color: #999;
font-size: 17px;
line-height: 27px;
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
    cursor:pointer;
    color: ${lightTheme.bg};
    :hover{
        color:${lightTheme.bg2}
    }
`
export const Twitter = styled(AiFillTwitterSquare)``
export const Facebook = styled(AiFillFacebook)``
export const LinkedIn = styled(AiFillLinkedin)``

// Middle Section
export const MiddleSection = styled(Section)`
 position: relative;
width: 25%;
@media ${b.lg}{
    display:none;
}
`

export const QuickLinksList = styled.ul`
:first-of-type{
    margin-top: 15px;
}
`
export const QuickLinks = styled.li`
list-style: none;
`
export const QuickLinkItem = styled.a`
    color: #999;
    text-decoration: none;
    margin-bottom: 10px;
    display: inline-block;
    cursor:pointer;
    :hover{
        color:#ffff
    };
`

// Right Section

export const RightSection = styled(Section)``

export const FooterList = styled(QuickLinksList)``
export const FooterListItem = styled(QuickLinksList)``
export const FooterText = styled.span`
display:flex;
gap: 10px;
color: #999;
    text-decoration: none;
    margin-bottom: 10px;
    :hover{
        color:#ffff
    };
`
export const Location = styled(BiCurrentLocation)``
export const Mail = styled(BiMailSend)``
export const Telephone = styled(BsFillTelephoneOutboundFill)``

export const MobileIcons = styled.div`
display:none;
@media ${b.md}{
    display:block;
}

`

// CopyRight
export const CopyRight = styled.div`
    background: ${lightTheme.primary}; 
    width: 100%;
    padding: 8px 100px;
    text-align: center;
    color: #999;
`





