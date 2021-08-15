import React from 'react'
import SideMenu from '../SideMenu/SideMenu';
import './Layout.scss';

interface LayoutProps {
    children: React.ReactChild
}

function Layout(props: LayoutProps) {
    const {children} = props;
    return (
        <div className="Layout">
            
            <SideMenu />
            {children}
        </div>
    )
}

export default Layout