import React from 'react';
import './Products.scss';
import Banner1 from '../../assets/Banner1.png';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Products({ categories, products, setProducts }) {
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
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={uuidv4()}>
              <div className="products-cards">
                <img
                  src={product.imageUrl}
                  alt="card"
                  className="card-image"
                ></img>
                <div className="flexspan">
                  <span className="capitalize itembrand">
                    {product.brand.title}
                  </span>{' '}
                  <span className="capitalize">
                    Renk: {product.color.title}
                  </span>
                </div>
                <div>
                  <p>{product.price},00 ₺</p>
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
