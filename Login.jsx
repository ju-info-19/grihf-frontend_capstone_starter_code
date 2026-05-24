import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://stayhealthy-api.com/api/login', credentials);
            localStorage.setItem('token', response.data.token);
            setMessage('✅ Connexion réussie !');
        } catch (error) {
            setMessage('❌ Email ou mot de passe incorrect');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
            <input name="password" placeholder="Mot de passe" type="password" onChange={handleChange} required />
            <button type="submit">Se connecter</button>
            {message && <p>{message}</p>}
        </form>
    );
};
export default Login;