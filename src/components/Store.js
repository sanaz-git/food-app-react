import React, { useContext } from 'react';

//Components
import Product from './shared/Product';

//Context
import { ProductContext } from '../context/ProductContextProvider';

//styles
import styles from './Store.module.css';

const Store = () => {
  const products = useContext(ProductContext);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.description}>
          <h2>Delicious Food, Delivered To You</h2>
          <p>
            Chosse your favorite meal from our broad selection of available
            meals and enjoy a <br />
            delicius lunch or dinner at home. <br />
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by
            <br /> experienced chefs!
          </p>
        </div>
        {products.map((product) => (
          <Product key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default Store;
