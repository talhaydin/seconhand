import React from 'react';
import './Products.scss';
import Banner1 from '../../assets/Banner1.png';
import { v4 as uuidv4 } from 'uuid';

function Products({ categories }) {
  return (
    <div className="products-container">
      <div className="products-content">
        <img src={Banner1} alt="banner1" className="banner"></img>
        <ul>
          <li>Hepsi</li>
          {categories.map((item) => (
            <li key={uuidv4()}>
              {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;
