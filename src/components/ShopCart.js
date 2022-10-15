import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ReactDom from 'react-dom';

//Components
import Cart from './shared/Cart';

//Context
import { CartContext } from '../context/CartContextProvider';

//Styles
import styles from '../components/ShopCart.module.css';

const ShopCart = () => {
  const { state } = useContext(CartContext);

  return ReactDom.createPortal(
    <div className={styles.mainContainer}>
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Link to="/products">
          <button className={styles.closeButton}>close</button>
        </Link>
        <Link to="/order">
          <button className={styles.orderButton}>order</button>
        </Link>
      </div>
    </div>,
    document.getElementById('child-root'),
  );
};

export default ShopCart;
