import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from '../../context/CartContextProvider';

//Icons
import { TiShoppingCart } from 'react-icons/ti';

//styles
import styles from '../shared/Navbar.module.css';

const Navbar = () => {
  const { state } = useContext(CartContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">
          ReactMeals
        </Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <TiShoppingCart style={{ fontSize: '25px', color: '#fff' }} />
          </Link>
          <p>Your Card</p>
          <span> {state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
