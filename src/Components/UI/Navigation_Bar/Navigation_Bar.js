import React from 'react'
import './navigationbar.css';

import Logo from '../Logo/Logo'
import Navigation_List from './Navigation_List/Navigation_List'

const Navigation_Bar = () => {
    return(
        <nav>
            <Logo />
            <Navigation_List />
        </nav>
    ) 
}

export default Navigation_Bar