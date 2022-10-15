import React, { useContext } from 'react';

// Functions
import { isInCart, quantityCount } from '../../helper/functions';

//Context
import { CartContext } from '../../context/CartContextProvider';

//styles
import styles from '../shared/Product.module.css';

//Icons
import { BiTrashAlt } from 'react-icons/bi';

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <div className={styles.dataContainer}>
        <div className={styles.productContainer}>
          <h2>{productData.title}</h2>
          <p>{productData.description}</p>
          <p>${productData.price}</p>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.amountContainer}>
            {quantityCount(state, productData.id) > 0 && (
              <p>
                Amount
                <span> {quantityCount(state, productData.id)}</span>
              </p>
            )}
          </div>
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: 'DECREASE', payload: productData })
              }
            >
              -
            </button>
          )}
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.deleteButton}
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: productData })
              }
            >
              <BiTrashAlt />
            </button>
          )}
          {isInCart(state, productData.id) ? (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: 'INCREASE', payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              className={styles.addButton}
              onClick={() =>
                dispatch({ type: 'ADD_ITEM', payload: productData })
              }
            >
              +Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
