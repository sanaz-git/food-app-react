import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactDom from 'react-dom';

//Context
import { CartContext } from '../../context/CartContextProvider';

const Confirm = () => {
  const { state } = useContext(CartContext);
  return ReactDom.createPortal(
    <div>
      {state.checkout && (
        <div>
          <h3>Checked Out Successfully</h3>
          <Link to="/products">go to menu</Link>
        </div>
      )}
    </div>,
    document.getElementById('child-root'),
  );
};

export default Confirm;
