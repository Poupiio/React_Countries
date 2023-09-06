import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                {/* On fait une ternaire pour vérifier si le lien en cours est actif, si oui, on lui ajoute la class "nav-active" pour appliquer le ::after du css */}
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>À propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;