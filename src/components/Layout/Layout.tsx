import React from 'react'
import './Layout.css';

interface LayoutProps {
    children: React.ReactChild
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