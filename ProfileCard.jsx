import React, { useState } from 'react';

const ProfileCard = () => {
    const [editMode, setEditMode] = useState(false);
    const [profile, setProfile] = useState({ name: 'Jean Dupont', email: 'jean@test.com', phone: '0612345678' });

    const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

    return (
        <div>
            <div><h3>{profile.name}</h3><p>{profile.email}</p><p>{profile.phone}</p><button onClick={() => setEditMode(!editMode)}>Modifier</button></div>
            {editMode && (
                <form>
                    <input name="name" value={profile.name} onChange={handleChange} />
                    <input name="email" value={profile.email} onChange={handleChange} />
                    <input name="phone" value={profile.phone} onChange={handleChange} />
                    <button onClick={() => setEditMode(false)}>Enregistrer</button>
                </form>
            )}
        </div>
    );
};
export default ProfileCard;