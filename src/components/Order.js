import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Components
import Cart from './shared/Cart';

//Context
import { CartContext } from '../context/CartContextProvider';

const Order = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      {state.selectedItems.map((item) => (
        <Cart key={item.id} data={item} />
      ))}

      <>
        <div>
          <input />
        </div>
        <div>
          <input />
        </div>
        <div>
          <Link to="/products">
            <button onClick={() => dispatch({ type: 'CLEAR' })}>cancel</button>
          </Link>

          <Link to="/confirm">
            <button onClick={() => dispatch({ type: 'CHECKOUT' })}>
              Confirm
            </button>
          </Link>
        </div>
      </>
    </div>
  );
};

export default Order;
