import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Components
import Cart from './shared/Cart';

//Context
import { CartContext } from '../context/CartContextProvider';

//Styles
import styles from '../components/ShopCart.module.css';

const ShopCart = () => {
  const { state } = useContext(CartContext);

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default ShopCart;
