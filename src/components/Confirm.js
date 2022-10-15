import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactDom from 'react-dom';

//Context
import { CartContext } from '../context/CartContextProvider';

//styles
import styles from '../components/Confirm.module.css';

const Confirm = () => {
  const { state } = useContext(CartContext);
  return ReactDom.createPortal(
    <div>
      {state.checkout && (
        <div className={styles.mainContainer}>
          <h3>Data was sent Successfully</h3>
          <span>
            <Link className={styles.linkContainer} to="/products">
              go to menu
            </Link>
          </span>
        </div>
      )}
    </div>,
    document.getElementById('child-root'),
  );
};

export default Confirm;
