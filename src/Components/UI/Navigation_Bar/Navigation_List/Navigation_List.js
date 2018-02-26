import React from 'react'

import './navigationlist.css';
import Navigation_Item from '../Navigation_Item/Navigation_Item'

const Navigation_List = () => {
    return (
        <ul className="Navigation_List">
            <li> <Navigation_Item path={"/"}> Home </Navigation_Item> </li>
            <li> <Navigation_Item path={"/redux"}> Redux </Navigation_Item> </li>
            <li> <Navigation_Item path={"/redux-thunk"}> Redux-Thunk </Navigation_Item> </li>
            <li> <Navigation_Item path={"/axios"}> Axios </Navigation_Item> </li>
            <li> <Navigation_Item path={"/router"}> React-Router </Navigation_Item>  </li>
        </ul>
    )
}

export default Navigation_List