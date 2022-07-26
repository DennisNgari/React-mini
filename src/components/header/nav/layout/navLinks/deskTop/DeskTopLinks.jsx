import {DropMenuItem,DropMenu, NavMenu, NavMenuItem,NavMenuItemLink,NavMenuList, MegaBox, MegaContent, MegaRow, MegaHeader, MegaMenu, MegaMenuListItem, MegaMenuItemLink, ProductIcon, ServiceIcon, IconCont, FinanceIcon, PriceIcon, LegalIcon} from "./style"
import { Products, Services, Finance, Legal, Pricing } from "../navLinkData"

const DeskTopLinks = () => {

    return (
        <NavMenu>
            <NavMenuList>

                <NavMenuItem>
                    <NavMenuItemLink>Home</NavMenuItemLink>
                </NavMenuItem>

                {/* Drop Menu */}
                <NavMenuItem dropDown>
                    <NavMenuItemLink >About</NavMenuItemLink>
                <DropMenu>
                <DropMenuItem>
                        <NavMenuItemLink>
                            About Us
                        </NavMenuItemLink>
                    </DropMenuItem>

                    <DropMenuItem>
                        <NavMenuItemLink>
                            Mission
                        </NavMenuItemLink>
                    </DropMenuItem>

                    <DropMenuItem>
                        <NavMenuItemLink>
                            Vision
                        </NavMenuItemLink>
                    </DropMenuItem>

                </DropMenu>
                </NavMenuItem>
                {/* End of Drop Menu */}

                {/* Mega Menu */}
                <NavMenuItem>
                    <NavMenuItemLink>Services</NavMenuItemLink>
                    <MegaBox>
                        <MegaContent>
                            {/* Row 1 */}
                            <MegaRow>
                                <IconCont><ProductIcon/><MegaHeader>Products</MegaHeader></IconCont>
                                <MegaMenu>
                                    {Products.map((p)=>(
                                        <MegaMenuListItem key = {p.key}>
                                            <MegaMenuItemLink> {p.name}</MegaMenuItemLink>
                                    </MegaMenuListItem>
                                    ))}
                                </MegaMenu>
                            </MegaRow>
                                
                                {/* Row 2 */}
                            <MegaRow>
                            <IconCont><ServiceIcon/><MegaHeader>Services</MegaHeader></IconCont>
                                <MegaMenu>
                                    {Services.map((p)=>(
                                        
                                        <MegaMenuListItem key = {p.key}>
                                            <MegaMenuItemLink> {p.name}</MegaMenuItemLink>
                                    </MegaMenuListItem>
                                    ))}
                                </MegaMenu>
                            </MegaRow>

                            {/* Row 3 */}
                            <MegaRow>
                            <IconCont><FinanceIcon/><MegaHeader>Finance</MegaHeader></IconCont>
                                <MegaMenu>
                                    {Finance.map((p)=>(
                                        <MegaMenuListItem key = {p.key}>
                                            <MegaMenuItemLink> {p.name}</MegaMenuItemLink>
                                    </MegaMenuListItem>
                                    ))}
                                </MegaMenu>
                            </MegaRow>

                               {/* Row 3 */}
                               <MegaRow>
                               <IconCont><LegalIcon/><MegaHeader>Legal</MegaHeader></IconCont>

                                <MegaMenu>
                                    {Legal.map((p)=>(
                                        <MegaMenuListItem key = {p.key}>
                                            <MegaMenuItemLink> {p.name}</MegaMenuItemLink>
                                    </MegaMenuListItem>
                                    ))}
                                </MegaMenu>
                            </MegaRow>

                             {/* Row 3 */}
                             <MegaRow>
                            <IconCont><PriceIcon/><MegaHeader>Pricing</MegaHeader></IconCont>
                                <MegaMenu>
                                    {Pricing.map((p)=>(
                                        <MegaMenuListItem key = {p.key}>
                                            <MegaMenuItemLink> {p.name}</MegaMenuItemLink>
                                    </MegaMenuListItem>
                                    ))}
                                </MegaMenu>
                            </MegaRow>


                        </MegaContent>

                    </MegaBox>
                </NavMenuItem>
                {/* End of Mega Menu */}


                <NavMenuItem>
                    <NavMenuItemLink>Contact</NavMenuItemLink>
                </NavMenuItem>

                <NavMenuItem>
                    <NavMenuItemLink href="https://projectprofessor.herokuapp.com/">Blog</NavMenuItemLink>
                </NavMenuItem>


            </NavMenuList>            
        </NavMenu>
    )
}

export default DeskTopLinks
