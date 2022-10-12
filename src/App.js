import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

//Components
import Store from './components/Store';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route path="/products" component={Store} />
            <Route path="/cart" component={ShopCart} />
            <Redirect to="/products" />
          </Switch>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
