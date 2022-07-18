import React from 'react';
import { Link } from 'react-router-dom'

export default function ProjectCard (props) {
    return (
        <Link className={props.className} to={'/projects/' + props.name}>
            <span className='card-overlay'></span>
            <img className='project-card-img' src={require('./simpeo.jpg')}/>
            <h1 className='project-card-title'>{props.name}</h1>
        </Link>
    )
}