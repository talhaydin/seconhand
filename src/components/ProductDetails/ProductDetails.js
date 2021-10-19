import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://bootcampapi.techcs.io/api/fe/v1/product/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, []);

  console.log(item);

  return (
    <div>
      <h1>{item.title}</h1>
    </div>
  );
}

export default ProductDetails;
