import React from 'react';
import GoodsCard from './GoodsCard';
import {Link} from 'react-router-dom';
const GoodsGallery = () => {

  const goodsData = [
    { id: 1, name: 'Toyota Supra A80', image: 'car1.jpg', price: 80000 },
    { id: 2, name: 'Toyota Mark II', image: 'car2.jpg', price: 20000 },
    { id: 3, name: 'Honda Civic', image: 'car3.jpg', price: 4000 },
    { id: 4, name: 'Mitsubishi Lancer Evolution', image: 'car4.jpg', price: 10000 },
    { id: 5, name: 'Nissan GTR R34', image: 'car5.jpg', price: 150000 },
    { id: 6, name: 'Daewoo Matiz', image: 'car6.jpg', price: 10000000 },
  ];

  return (
    <div>
        <Link to="/">Task 1</Link>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {goodsData.map((item) => (
          <GoodsCard key={item.id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default GoodsGallery;
