import React, { Component } from "react";

import "./header.css";

import {Link} from 'react-router-dom';


export default function Header(props) {
    return (
        <div className="header">
            <div className="header-logo-wrap">
                <img src="./assets/simpeo.jpg" className="header-logo"/>
            </div>
            <div className="navigation-warp">
                <Link className="header-btn" to="">Home</Link>
                <Link className="header-btn" to="code">Personal Docs</Link>
                <Link className="header-btn" to="projects">Projects</Link>
                <Link className="header-btn" to="contactme">Contact Me</Link>
            </div>
        </div>
    )
}