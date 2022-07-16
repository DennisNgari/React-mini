import {DropMenuItem,DropMenu, NavMenu, NavMenuItem,NavMenuItemLink,NavMenuList, MegaBox, MegaContent, MegaRow, MegaHeader, MegaMenu, MegaMenuListItem, MegaMenuItemLink} from "./style"
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
                            Mission
                        </NavMenuItemLink>
                    </DropMenuItem>

                    <DropMenuItem>
                        <NavMenuItemLink>
                            Vision
                        </NavMenuItemLink>
                    </DropMenuItem>

                    <DropMenuItem>
                        <NavMenuItemLink>
                            FAQ
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
                                <MegaHeader>Products</MegaHeader>
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
                                <MegaHeader>Services</MegaHeader>
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
                                <MegaHeader>Finance</MegaHeader>
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
                                <MegaHeader>Legal</MegaHeader>
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
                                <MegaHeader>Pricing</MegaHeader>
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
                    <NavMenuItemLink>Blog</NavMenuItemLink>
                </NavMenuItem>


            </NavMenuList>            
        </NavMenu>
    )
}

export default DeskTopLinks
