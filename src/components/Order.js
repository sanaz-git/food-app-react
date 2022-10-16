import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Components
import Cart from './shared/Cart';

//Context
import { CartContext } from '../context/CartContextProvider';

//styles
import styles from '../components/Order.module.css';

const Order = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={styles.mainContainer}>
      {state.selectedItems.map((item) => (
        <Cart key={item.id} data={item} />
      ))}

      <div className={styles.orderContainer}>
        <div className={styles.indexContainer}>
          <label>Name:</label>
          <input type="text" />

          <label>Address:</label>
          <input type="text" />
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/products">
            <button
              className={styles.cancelButton}
              onClick={() => dispatch({ type: 'CLEAR' })}
            >
              cancel
            </button>
          </Link>

          <Link to="/confirm">
            <button
              className={styles.confirmButton}
              onClick={() => dispatch({ type: 'CHECKOUT' })}
            >
              Confirm
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
