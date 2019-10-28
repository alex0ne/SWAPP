import React from 'react'
import {Link} from 'react-router-dom'

export default function Characters() {
    return (
        <div>
            Characters page
            <div>
                <li>
                    <Link to="/characters/1">Character one</Link>
                </li>   
                <li>
                    <Link to="/characters/2">Character two</Link>
                </li>   
            </div>
        </div>
    )
}
