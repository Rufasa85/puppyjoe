import React from 'react';
import {Link} from "react-router-dom";
import "./style.css"

export default function Navbar() {
    return (
        <div className = "Navbar">
            <Link to="/about">About</Link>
            <Link to="/discover">Discover</Link>
            <Link to="/search">Search</Link>
        </div>
    )
}
