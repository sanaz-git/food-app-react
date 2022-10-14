import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactDom from 'react-dom';

//Components
import Cart from './shared/Cart';

//Context
import { CartContext } from '../context/CartContextProvider';

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return ReactDom.createPortal(
    <div>
      {state.selectedItems.map((item) => (
        <Cart key={item.id} data={item} />
      ))}
      <br />
      {state.itemsCounter > 0 && (
        <div>
          <p>
            <span>Total Amount</span> ${state.total}
          </p>
          <div>
            <Link to="/products">
              <button>close</button>
            </Link>

            <Link to="/order">
              <button>order</button>
            </Link>
          </div>
        </div>
      )}
    </div>,
    document.getElementById('child-root'),
  );
};

export default ShopCart;
