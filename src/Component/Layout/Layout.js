import React from 'react'
import MobileNav from '../MobileNav';
import SideBar from '../SideBar';
import UserHeader from '../UserHeader';

import {StyledContent} from './Styles';

const Layout=({ user, children}) => {
    return (
       <>
        <MobileNav />
        <SideBar />
        <StyledContent> 
            <UserHeader user = {user} />
            <div>{children}</div>
        </StyledContent>
       </>
    );
};

export default Layout
