import React, { useState } from 'react';
import axios from 'axios';

const FindDoctorSearch = () => {
    const [specialty, setSpecialty] = useState('');
    const [doctors, setDoctors] = useState([]);

    const handleSearch = async () => {
        const response = await axios.get(`https://stayhealthy-api.com/api/doctors?specialty=${specialty}`);
        setDoctors(response.data);
    };

    return (
        <div>
            <select onChange={(e) => setSpecialty(e.target.value)}>
                <option value="">Choisir une spécialité</option>
                <option value="cardiologie">Cardiologie</option>
                <option value="dermatologie">Dermatologie</option>
                <option value="pédiatrie">Pédiatrie</option>
            </select>
            <button onClick={handleSearch}>Rechercher</button>
            <ul>{doctors.map(d => <li key={d.id}>{d.name} - {d.specialty}</li>)}</ul>
        </div>
    );
};
export default FindDoctorSearch;