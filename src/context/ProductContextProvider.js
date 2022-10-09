import React, { createContext } from 'react';

const products = [
  {
    id: 1,
    title: 'Sushi',
    description: 'Finest fish and veggies',
    price: '22.99',
  },
  {
    id: 2,
    title: 'Schnitzel',
    description: 'A german specialty!',
    price: '16.5',
  },
  {
    id: 3,
    title: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: '12.99',
  },
  {
    id: 4,
    title: 'Grenn Bowl',
    description: 'Healthy...and green...',
    price: '18.99',
  },
];

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  return (
    <div>
      <ProductContext.Provider value={products}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
