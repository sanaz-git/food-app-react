import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from '../context/CartContextProvider';

//styles
import styles from '../components/Confirm.module.css';

const Confirm = () => {
  const { state } = useContext(CartContext);
  return (
    <div className={styles.mainContainer}>
      {state.checkout && (
        <div className={styles.text}>
          Data was sent Successfully
          <Link className={styles.linkContainer} to="/products">
            go to menu
          </Link>
        </div>
      )}
    </div>
  );
};

export default Confirm;
