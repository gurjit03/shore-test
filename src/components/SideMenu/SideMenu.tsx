import React from 'react';
import sideMenuListItems from './sideMenuListItems'
import IconProps from '../../icons/iconprops';
import AppLogoIcon from '../../icons/AppLogoIcon';
import './SideMenu.css'

interface SideMenuListItemProps {
    name: string;
    icon: React.FC<IconProps>;
}

const SideMenuListItem: React.FC<SideMenuListItemProps> = (props) => {
    const {name, icon: Icon} = props;
    return (
        <li className="SideMenu-li">
            <span className="SideMenu-li-icon">
                <Icon />
            </span>
            {name}
        </li>
    )
}

function SideMenu() {
    return (
        <div className="SideMenu">
            <div className="SideMenu-logo">
                <AppLogoIcon />
            </div>
            <ul className="SideMenu-list">
                {sideMenuListItems.map((sideMenuListItem, idx) => <SideMenuListItem key={idx} {...sideMenuListItem}/>)}
            </ul>
        </div>
    )
}

export default SideMenu