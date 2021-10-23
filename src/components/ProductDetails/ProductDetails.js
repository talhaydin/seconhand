import React from 'react';
import './ProductDetails.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://bootcampapi.techcs.io/api/fe/v1/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, []);

  if (loading === true) {
    return <div>Loading data...</div>;
  } else {
    return (
      <div className="product-details-layout">
        <div className="product-details-container">
          <div className="image-container">
            <img src={item.imageUrl} alt="detailedimage"></img>
          </div>
          <div>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <h3>
              <div>
                Marka: <span>{item.brand.title}</span>
              </div>
              <div>
                Renk:
                <span> {item.color.title}</span>
              </div>
              <div>
                Kullanım Durumu: <span>{item.status.title}</span>
              </div>
              <div>
                <h2>{item.price},00 ₺</h2>
              </div>
              <button className="btn-purchase">Satın Al</button>
              <button className="btn-offer">Teklif Ver</button>
            </h3>
            <h3>Açıklama:</h3>
            <div className="product-specs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
              dolorum! Doloribus eum deleniti quidem corrupti commodi minus
              atque consequuntur nesciunt?
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
