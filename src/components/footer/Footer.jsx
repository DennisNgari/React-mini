import {
    Facebook, 
    FooterContainer,
    FooterWrapper,
    HeadingFooter,
    LeftSection,
    LinkedIn,
    ParagraphFooter,
    SocialIconLink,
    SocialIconList,
    SocialIconListItem,
    Twitter,
    MiddleSection,
    QuickLinksList,
    QuickLinks,
    QuickLinkItem,
    RightSection,
    FooterList,
    FooterListItem,
    FooterText,
    Location,
    Mail,
    Telephone,
    CopyRight,
    MobileIcons
    } from './style'

const Footer = () => {
    const year  = new Date().getFullYear() 
    return (
        <>
        <FooterWrapper>
            <FooterContainer>
                <LeftSection>
                    <HeadingFooter>About Expert Professor</HeadingFooter>
                    <ParagraphFooter>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto harum ea reprehenderit non natus quia nihil repellendus amet doloribus et!</ParagraphFooter>
                    <SocialIconList>
                        <SocialIconListItem>
                            <SocialIconLink>
                                <Twitter/>
                            </SocialIconLink>

                            <SocialIconLink>
                                <Facebook/>
                            </SocialIconLink>

                            <SocialIconLink>
                                <LinkedIn/>
                            </SocialIconLink>
                        </SocialIconListItem>
                    </SocialIconList>
                </LeftSection>

                <MiddleSection>
                    <HeadingFooter> Quick Links </HeadingFooter>
                <QuickLinksList>
                    <QuickLinks><QuickLinkItem to = "#">About</QuickLinkItem></QuickLinks>
                    <QuickLinks><QuickLinkItem to = "#">FAQ</QuickLinkItem></QuickLinks>
                    <QuickLinks><QuickLinkItem to = "#">Help</QuickLinkItem></QuickLinks>
                    <QuickLinks><QuickLinkItem to = "#">Privacy Policy</QuickLinkItem></QuickLinks>
                    <QuickLinks><QuickLinkItem to = "#">Privacy Policy</QuickLinkItem></QuickLinks>
                    <QuickLinks><QuickLinkItem to = "#">Terms and Conditions</QuickLinkItem></QuickLinks>
                    <QuickLinks><QuickLinkItem to = "#">Contact</QuickLinkItem></QuickLinks>   
                </QuickLinksList>
                </MiddleSection>

                <RightSection><HeadingFooter>Contact Us</HeadingFooter>
                <FooterList>
                    <FooterListItem>
                        <FooterText><Location/> Nairobi Kenya</FooterText>
                    </FooterListItem>

                    <FooterListItem>
                        <FooterText><Mail/> expertprofessor@gmail.com</FooterText>
                    </FooterListItem>

                    <FooterListItem>
                        <FooterText><Telephone/> +(254) 758 437 355</FooterText>
                    </FooterListItem>

    
                </FooterList>
                </RightSection>
            </FooterContainer>

            {/* Social-link Icons for Mobile version */}
            <MobileIcons>
            <SocialIconList>
                        <SocialIconListItem>
                            <SocialIconLink>
                                <Twitter/>
                            </SocialIconLink>

                            <SocialIconLink>
                                <Facebook/>
                            </SocialIconLink>

                            <SocialIconLink>
                                <LinkedIn/>
                            </SocialIconLink>
                        </SocialIconListItem>
                    </SocialIconList>
            </MobileIcons>
        </FooterWrapper>

        <CopyRight>
            <ParagraphFooter>Copyright Ⓒ {year} expert Professor. All Rights Reserved.</ParagraphFooter>
        </CopyRight>
        </>
    )
}

export default Footer
