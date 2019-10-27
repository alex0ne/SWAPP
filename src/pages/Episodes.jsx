import React from 'react'
import {Link} from 'react-router-dom'

export default function Episodes() {
    return (
        <div>
            Episodes page
            <div>
                <li>
                    <Link to="/episodes/1">Episode one</Link>
                </li>   
                <li>
                    <Link to="/episodes/2">Episode two</Link>
                </li>   
            </div>
        </div>
    )
}
