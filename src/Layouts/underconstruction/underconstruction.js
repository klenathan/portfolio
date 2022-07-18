import "./underconstruction.css"
import React from 'react';

import {Link} from 'react-router-dom';

export default function Underconstruction() {
    return (
        <div>
            <div className="main-content">
                <div className="err-container">
                    <h1>🔨 The page is underconstruction</h1>
                    <h1>🥰 Please be patient </h1>
                    <Link className="return-home" to="/">Go back to the homepage</Link>
                </div>
            </div>
        </div>
    )
}