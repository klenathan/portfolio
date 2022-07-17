import React from "react";

import "./header.css";

import {NavLink, Link} from 'react-router-dom';


export default function Header(props) {
    return (
        <div className="header">
            <div className="navigation-warp">
                <NavLink className="header-btn" to="/" replace>Home</NavLink>
                <Link className="header-btn" to="/projects" >Projects</Link>
                <Link className="header-btn" to="/code" >Personal Docs</Link>
                <Link className="header-btn" to="/secretepath" >Secrete Path</Link>
                <Link className="header-btn" to="/contactme" >Contact Me</Link>
            </div>
        </div>
    )
} 