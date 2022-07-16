import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { Facebook, FooterContainer, FooterWrapper, HeadingFooter, LeftSection, LinkedIn, ParagraphFooter, SocialIconLink, SocialIconList, SocialIconListItem, Twitter } from './style'

const Footer = () => {
    return (
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
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer
