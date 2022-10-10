import React, { useContext } from 'react';

//Context
import { CartContext } from '../../context/CartContextProvider';

//Functions
import { isInCart, quantityCount } from '../../helper/functions';

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
        <span>Amount</span>
        <input type="number" />
        {/* <button>+ Add</button> */}

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

        {/* Cart Counter */}
        {quantityCount(state, productData.id) > 0 && (
          <span>
            {quantityCount(state, productData.id)}
            <input type="number" />
          </span>
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
            +ADD
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
