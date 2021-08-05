import React from 'react';
import sideMenuListItems from './sideMenuListItems'
import './SideMenu.css'

interface SideMenuListItemProps {
    name: string;
    icon: React.ReactElement;
}

function SideMenuListItem(props: SideMenuListItemProps) {
    const {name, icon} = props;
    return (
        <li className="SideMenu-li">
            <span>{icon}</span>
            {name}
        </li>
    )
}

function SideMenu() {
    return (
        <ul className="SideMenu">
            {sideMenuListItems.map((sideMenuListItem, idx) => <SideMenuListItem key={idx} {...sideMenuListItem}/>)}
        </ul>
    )
}

export default SideMenu