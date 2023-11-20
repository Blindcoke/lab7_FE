import React from 'react';

const GoodsCard = ({ image, name, price }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      <img src={process.env.PUBLIC_URL + '/images/' + image} alt={name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

export default GoodsCard;