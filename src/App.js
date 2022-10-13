import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

//Components
import Store from './components/Store';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
import Order from './components/Order';
import Confirm from './components/shared/Confirm';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route path="/products" component={Store} />
            <Route path="/cart" component={ShopCart} />
            <Route path="/order" component={Order} />
            <Route path="/confirm" component={Confirm} />
            <Redirect to="/products" />
          </Switch>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
