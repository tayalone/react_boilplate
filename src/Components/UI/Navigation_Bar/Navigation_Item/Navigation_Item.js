import React from 'react'
import { Link } from 'react-router-dom'
import './navgation_item.css'

const Navigation_Item = (props) => {
    // return <a className="Nav_Item" href="#"> {props.children} </a>
    return <Link className="Nav_Item" to={props.path}> {props.children}  </Link>
}

export default Navigation_Item