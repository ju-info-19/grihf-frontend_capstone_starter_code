```jsx
import React, { useState } from 'react';
import axios from 'axios';

const Sign_Up = () => {
    const [formData, setFormData] = useState({ role: '', name: '', email: '', phone: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://stayhealthy-api.com/api/register', formData);
            setMessage('✅ Inscription réussie !');
        } catch (error) {
            setMessage('❌ Erreur lors de l\'inscription');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <select name="role" onChange={handleChange} required><option value="">Rôle</option><option value="patient">Patient</option><option value="doctor">Médecin</option></select>
            <input name="name" placeholder="Nom" onChange={handleChange} required />
            <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
            <input name="phone" placeholder="Téléphone" onChange={handleChange} required />
            <input name="password" placeholder="Mot de passe" type="password" onChange={handleChange} required />
            <button type="submit">S'inscrire</button>
            {message && <p>{message}</p>}
        </form>
    );
};
export default Sign_Up;