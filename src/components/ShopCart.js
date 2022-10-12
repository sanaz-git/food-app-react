import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Components
import Cart from './shared/Cart';

//Context
import { CartContext } from '../context/CartContextProvider';

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      {state.selectedItems.map((item) => (
        <Cart key={item.id} data={item} />
      ))}
      <br />
      {state.itemsCounter > 0 && (
        <div>
          <p>
            <span>Total Items:</span> {state.itemsCounter}
          </p>
          <p>
            <span>Total Payments:</span> {state.total}
          </p>
          <div>
            <button onClick={() => dispatch({ type: 'CHECKOUT' })}>
              Check Out
            </button>
            <button onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div>
          <Link to="/products">order</Link>
        </div>
      )}

      {!state.checkout && state.itemsCounter === 0 && (
        <div>
          <Link to="/products">cancel</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
