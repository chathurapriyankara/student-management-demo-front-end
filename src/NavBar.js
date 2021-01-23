import React from 'react';
import {NavLink} from "react-router-dom";

export class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark">
                <ul class="navbar-nav">
                    <li className="nav-item nav-link"><NavLink exact to="/">View</NavLink></li>
                    <li className="nav-item nav-link"><NavLink exact to="/create">Create</NavLink></li>
                </ul>
            </nav>
        );
    }
}