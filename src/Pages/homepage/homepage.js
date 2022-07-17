import React  from "react"
import { useParams } from 'react-router-dom'

import "./homepage.css"

export default function Homepage(props) {
    // const {id} = useParams()
    
    return (
        <div>
            <div className="home-overview">

                <div className="overview-txt-wrap">
                    <div className="overview-txt-box">

                        <h1>Hi there! Welcome to my small portfolio!</h1>
                        <p>
                            :D
                        </p>
                    </div>
                </div>

                <div className="somekindofimg">
                    
                </div>
            </div>
        </div>
    )
    
}