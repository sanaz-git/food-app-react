import React, { useContext } from 'react';

//Context
import { CartContext } from '../../context/CartContextProvider';

const Cart = (props) => {
  const { dispatch } = useContext(CartContext);
  const { title, price, quantity } = props.data;

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{price}$</p>
        <span>X {quantity}</span>
      </div>
      <div>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: 'DECREASE', payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: 'REMOVE_ITEM', payload: props.data })
            }
          >
            delete
          </button>
        )}
        <button
          onClick={() => dispatch({ type: 'INCREASE', payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
