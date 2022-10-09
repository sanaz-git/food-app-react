import React from 'react';

const Product = ({ productData }) => {
  return (
    <div>
      <div>
        <h2>{productData.title}</h2>
        <p>{productData.description}</p>$<span>{productData.price}</span>
      </div>
      <div>
        <button>+ Add</button>
      </div>
    </div>
  );
};

export default Product;
