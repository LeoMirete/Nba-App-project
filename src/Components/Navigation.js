import React from "react";
import { NavLink } from "react-router-dom";
import "../style/components/Navigation.css";

const Navigation = () => {
    return (
        <div className="navigation-title">
            <ul className="navigation">
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/Favori">
                    <li>Favoris</li>
                </NavLink>
            </ul>
            <h1>NBA Players</h1>
        </div>
    );
};

export default Navigation;
