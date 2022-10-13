import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from '../../context/CartContextProvider';

const Confirm = () => {
  const { state } = useContext(CartContext);
  return (
    <div>
      {state.checkout && (
        <div>
          <h3>Checked Out Successfully</h3>
          <Link to="/products">go to menu</Link>
        </div>
      )}
    </div>
  );
};

export default Confirm;
