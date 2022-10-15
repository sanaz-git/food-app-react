import React, { useContext } from 'react';
import ReactDom from 'react-dom';

//Context
import { CartContext } from '../../context/CartContextProvider';

//Styles
import styles from '../shared/Cart.module.css';

//Icons
import { BiTrashAlt } from 'react-icons/bi';

const Cart = (props) => {
  const { state, dispatch } = useContext(CartContext);
  const { title, price, quantity } = props.data;

  return ReactDom.createPortal(
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.productContainer}>
          <h3>{title}</h3>
          <p>
            $ {price}
            <span> X {quantity}</span>
          </p>
        </div>
        <div className={styles.buttonContainer}>
          {quantity > 1 ? (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: 'DECREASE', payload: props.data })
              }
            >
              -
            </button>
          ) : (
            <button
              className={styles.deleteButton}
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: props.data })
              }
            >
              <BiTrashAlt />
            </button>
          )}
          <button
            className={styles.smallButton}
            onClick={() => dispatch({ type: 'INCREASE', payload: props.data })}
          >
            +
          </button>
        </div>
      </div>

      {state.itemsCounter > 0 && (
        <div className={styles.mount}>
          <div className={styles.amountContainer}>
            <div>Total Amount</div>
            <div> ${state.total}</div>
          </div>
        </div>
      )}
    </div>,
    document.getElementById('child-root'),
  );
};

export default Cart;
