import React from 'react'
import './Layout.css';

interface LayoutProps {
    children: React.ReactChildren
}

function Layout(props: LayoutProps) {
    const {children} = props;
    return (
        <div className="layout">
            {children}
        </div>
    )
}

export default Layout