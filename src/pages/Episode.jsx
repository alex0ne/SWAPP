import React from 'react'
import { useLocation } from "react-router-dom";

export default function Episode() {
    let location = useLocation();
    return (
        <div>
            Episode {location.pathname[location.pathname.length-1]}
        </div>
    )
}
