import React, { useState } from 'react';

const DoctorCard = ({ doctor }) => {
    const [cancelled, setCancelled] = useState(false);

    const handleCancel = () => {
        setCancelled(true);
        alert(`Rendez-vous avec ${doctor.name} annulé`);
    };

    if (cancelled) return <div>Rendez-vous annulé</div>;

    return (
        <div>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <button onClick={handleCancel}>Annuler le rendez-vous</button>
        </div>
    );
};
export default DoctorCard;