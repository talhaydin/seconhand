import React from 'react';
import './Products.scss';
import Banner1 from '../../assets/Banner1.png';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function Products({ categories, products }) {
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
        <div className="products-cards-layout">
          {products.map((item) => (
            <Link to={`/products/${item.id}`}>
              <div className="products-cards" key={uuidv4()}>
                <img
                  src={item.imageUrl}
                  alt="card"
                  className="card-image"
                ></img>
                <div className="flexspan">
                  <span className="capitalize itembrand">
                    {item.brand.title}
                  </span>{' '}
                  <span className="capitalize">Renk: {item.color.title}</span>
                </div>
                <div>
                  <p>{item.price},00 TL</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
