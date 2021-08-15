import React from 'react';
import { Link } from 'react-router-dom';

import sideMenuListItems from './sideMenuListItems'
import IconProps from '../../interfaces/IconProps.interface';
import AppLogoIcon from '../../icons/AppLogoIcon';
import './SideMenu.scss'

interface SideMenuListItemProps {
    name: string;
    icon: React.FC<IconProps>;
    href: string;
}

const SideMenuListItem: React.FC<SideMenuListItemProps> = (props) => {
    const {name, icon: Icon, href} = props;
    return (
        <li className="SideMenu-li">
            <span className="SideMenu-li-icon">
                <Icon />
            </span>
            <Link to={href}>
                {name}
            </Link>
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