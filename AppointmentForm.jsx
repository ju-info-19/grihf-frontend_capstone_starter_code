import React, { useState } from 'react';

const AppointmentForm = () => {
    const [form, setForm] = useState({ name: '', phone: '', date: '', time: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Rendez-vous confirmé pour ${form.name} le ${form.date} à ${form.time}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Nom" onChange={handleChange} required />
            <input name="phone" placeholder="Téléphone" onChange={handleChange} required />
            <input name="date" type="date" onChange={handleChange} required />
            <input name="time" type="time" onChange={handleChange} required />
            <button type="submit">Confirmer le rendez-vous</button>
        </form>
    );
};
export default AppointmentForm;