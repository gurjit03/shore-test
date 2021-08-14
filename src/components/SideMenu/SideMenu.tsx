import React from 'react';
import sideMenuListItems from './sideMenuListItems'
import IconProps from '../../icons/iconprops';
import './SideMenu.css'

interface SideMenuListItemProps {
    name: string;
    icon: React.FC<IconProps>;
}

const SideMenuListItem: React.FC<SideMenuListItemProps> = (props) => {
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