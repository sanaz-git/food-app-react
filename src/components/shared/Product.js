import React from 'react';

const Product = ({ productData }) => {
  return (
    <div>
      <div>
        <h2>{productData.title}</h2>
        <p>{productData.description}</p>
        <p>$ {productData.price}</p>
      </div>
      <div>
        <span>Amount</span>
        <input type="number" />
        <button>+ Add</button>
      </div>
    </div>
  );
};

export default Product;
