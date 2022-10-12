import React, { useContext } from 'react';

// Functions
import { isInCart, quantityCount } from '../../helper/functions';

//Context
import { CartContext } from '../../context/CartContextProvider';

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <div>
        <h2>{productData.title}</h2>
        <p>{productData.description}</p>
        <p>$ {productData.price}</p>
      </div>
      <div>
        {quantityCount(state, productData.id) > 1 && (
          <button
            onClick={() => dispatch({ type: 'DECREASE', payload: productData })}
          >
            -
          </button>
        )}
        {quantityCount(state, productData.id) === 1 && (
          <button
            onClick={() =>
              dispatch({ type: 'REMOVE_ITEM', payload: productData })
            }
          >
            delete
          </button>
        )}

        {quantityCount(state, productData.id) > 0 && (
          <span>{quantityCount(state, productData.id)}</span>
        )}

        {isInCart(state, productData.id) ? (
          <button
            onClick={() => dispatch({ type: 'INCREASE', payload: productData })}
          >
            +
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: 'ADD_ITEM', payload: productData })}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
