import React, { useState } from 'react';

const AppointmentFormIC = () => {
    const [form, setForm] = useState({ name: '', phone: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Rendez-vous demandé par ${form.name}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Nom" onChange={handleChange} required />
            <input name="phone" placeholder="Téléphone" onChange={handleChange} required />
            <button type="submit">Prendre rendez-vous</button>
        </form>
    );
};
export default AppointmentFormIC;