import { Fragment } from 'react'
import {useState} from 'react'
import { ArrowContainer, ArrowIcon, DropDownContainer, DropDownLabel, NavMenuItem } from "../style"
import { DropdownContainer, TreeChildCont, TreeItemCont } from './style'


const TreeItem = ({label, children, link})=>{
const [isOpen, setIsOpen] = useState(false)
    return(
        <TreeItemCont>
            {link && (<NavMenuItem>{label}</NavMenuItem>)}
        {!link && (<DropDownContainer onClick={() => setIsOpen((p)=> !p)}>
        <DropDownLabel isOpen={isOpen}>{label}</DropDownLabel>
        <ArrowContainer isOpen={isOpen}>
            <ArrowIcon/>
        </ArrowContainer>
    </DropDownContainer>)}
    {children && isOpen && <TreeChildCont>{children}</TreeChildCont>}
        </TreeItemCont>
    )
}
const DropDown = ({tree}) => {
    const createTree = (branch) => (
        <TreeItem  label={branch.label} link={branch.link}>
            {branch?.branches?.map((branch, index) => (
                <Fragment key={index}>{createTree(branch)}</Fragment>
            ))}
        </TreeItem>
    );

    return (
        <DropdownContainer>
             {tree.map((branch, index) => (
                <Fragment key={index}>{createTree(branch)}</Fragment>
            ))}
        </DropdownContainer>
    )
}

export default DropDown
