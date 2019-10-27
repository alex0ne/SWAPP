import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <ul>
            <li>
                <Link to="/episodes">episodes</Link>
            </li>           
            <li>
                <Link to="/characters">characters</Link>
            </li>
            </ul>
        </div>
    )
}
