import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({ name, scientificName, size, diet, additional, image }) {
    const showAdditionalData = () => {
        if (!additional) return;
        const additionalInfo = Object.entries(additional)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');
        alert(additionalInfo);
    };

    return (
        <div className="animal-card">
            <img src={image} alt={name} className="animal-image" />
            <h2>{name}</h2>
            <h3><i>{scientificName}</i></h3>
            <p>Size: {size} kg</p>
            <p>Diet: {diet.join(', ')}</p>
            <button onClick={showAdditionalData}>More Info</button>
        </div>
    );
}

AnimalCard.propTypes = {
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    additional: PropTypes.shape({
        notes: PropTypes.string,
        link: PropTypes.string,
    }),
    image: PropTypes.string.isRequired,
};

