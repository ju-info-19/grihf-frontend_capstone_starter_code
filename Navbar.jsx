import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/appointments">Prendre rendez-vous</Link>
            {!token ? (
                <>
                    <Link to="/login">Connexion</Link>
                    <Link to="/signup">S'inscrire</Link>
                </>
            ) : (
                <button onClick={handleLogout}>Déconnexion</button>
            )}
        </nav>
    );
};
export default Navbar;