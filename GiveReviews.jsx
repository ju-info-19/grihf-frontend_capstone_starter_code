import React, { useState } from 'react';

const GiveReviews = () => {
    const [review, setReview] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea placeholder="Votre avis" value={review} onChange={(e) => setReview(e.target.value)} required />
                <button type="submit" disabled={submitted}>Envoyer</button>
            </form>
            {submitted && <p>✅ Merci pour votre avis !</p>}
        </div>
    );
};
export default GiveReviews;