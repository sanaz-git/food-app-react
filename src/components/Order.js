import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactDom from 'react-dom';

//Components
import Cart from './shared/Cart';

//Context
import { CartContext } from '../context/CartContextProvider';

const Order = () => {
  const { state, dispatch } = useContext(CartContext);
  return ReactDom.createPortal(
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
    </div>,
    document.getElementById('child-root'),
  );
};

export default Order;
