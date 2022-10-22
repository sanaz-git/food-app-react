import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Components
import Cart from './shared/Cart';

//Context
import { CartContext } from '../context/CartContextProvider';

//Styles
import styles from '../components/ShopCart.module.css';

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>

      <div
        className={
          state.itemsCounter === 0
            ? styles.hideButtonContainer
            : styles.buttonContainer
        }
      >
        {state.itemsCounter > 0 && (
          <div className={styles.mount}>
            <div className={styles.amountContainer}>
              <div>Total Amount</div>
              <div> ${state.total}</div>
            </div>
          </div>
        )}

        <Link to="/products">
          <button
            className={
              state.itemsCounter === 0
                ? styles.hideCloseButton
                : styles.closeButton
            }
          >
            close
          </button>
        </Link>
        <Link to="/order">
          <button
            className={
              state.itemsCounter === 0
                ? styles.hideOrderButton
                : styles.orderButton
            }
          >
            order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShopCart;
