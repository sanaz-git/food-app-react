import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//Context
import { CartContext } from '../../context/CartContextProvider';

//Styles
import styles from '../shared/Cart.module.css';

//Icons
import { BiTrashAlt } from 'react-icons/bi';

const Cart = (props) => {
  const { state, dispatch } = useContext(CartContext);
  const { title, price, quantity } = props.data;

  return (
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
    </div>
  );
};

export default Cart;
