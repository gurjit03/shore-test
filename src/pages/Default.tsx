import React from 'react';
import { useLocation } from 'react-router-dom';

const DefaultPage: React.FC = () => {
    const {pathname} = useLocation();
    const page = pathname.replace('/','')
    return <div>{page}</div>
} 

export default DefaultPage;