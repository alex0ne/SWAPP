import React from 'react'
import { useLocation } from "react-router-dom";

export default function Character() {
    let location = useLocation();
    return (
        <div>
            Character {location.pathname[location.pathname.length-1]}
        </div>
    )
}
