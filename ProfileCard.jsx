import React, { useState } from 'react';

const ProfileCard = () => {
    const [editMode, setEditMode] = useState(false);
    const [profile, setProfile] = useState({ name: 'Jean Dupont', email: 'jean@test.com', phone: '0612345678' });
    const [editForm, setEditForm] = useState({ name: profile.name, phone: profile.phone });

    const handleEditChange = (e) => setEditForm({ ...editForm, [e.target.name]: e.target.value });

    const handleSave = () => {
        setProfile({ ...profile, name: editForm.name, phone: editForm.phone });
        setEditMode(false);
    };

    return (
        <div>
            <div><h3>{profile.name}</h3><p>{profile.email}</p><p>{profile.phone}</p><button onClick={() => setEditMode(true)}>Modifier</button></div>
            {editMode && (
                <form>
                    <input name="name" value={editForm.name} onChange={handleEditChange} placeholder="Nom" />
                    <input name="phone" value={editForm.phone} onChange={handleEditChange} placeholder="Téléphone" />
                    <button type="button" onClick={handleSave}>Enregistrer</button>
                    <button type="button" onClick={() => setEditMode(false)}>Annuler</button>
                </form>
            )}
        </div>
    );
};
export default ProfileCard;
