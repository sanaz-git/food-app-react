import React, { useContext } from 'react';

//Context
import { CartContext } from '../../context/CartContextProvider';

//Icons
import shop from '../../assets/icons/shop.svg';

const Navbar = () => {
  const { state } = useContext(CartContext);
  return (
    <div>
      <div>
        <a>product</a>
        <div>
          <img src={shop} alt="shop" />
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
