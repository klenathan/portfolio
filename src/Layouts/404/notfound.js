import "./notfound.css"

import {Link} from 'react-router-dom';

export default function Notfound() {
    return (
        <div>
            <div className="main-content">
                <div className="err-container">
                    <h1>404 Not found</h1>
                    <Link className="return-home" to="" >Go back to homepage</Link>
                </div>
            </div>
        </div>
    )
}