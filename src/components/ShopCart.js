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
            <span>Total Payments:</span> {state.total}
          </p>
          <div>
            <button onClick={() => dispatch({ type: 'CHECKOUT' })}>
              Order
            </button>
            <button onClick={() => dispatch({ type: 'CLEAR' })}>
              Close-clear
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div>
          <input type="string" />
          <input type="string" />
          <Link to="/Order">Confirm</Link>
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
