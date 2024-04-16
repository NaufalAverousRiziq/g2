
import React from 'react';
import './styles.css';

const Card = ({ name, imgURL, phone, email }) => (
  <div className="contact-card">
    <img src={imgURL} alt={name} />
    <h2>{name}</h2>
    <p>📞: {phone}</p>
    <p>📧: {email}</p>
  </div>
);

export default Card;
