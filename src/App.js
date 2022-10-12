import './App.css';

//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import Navbar from './components/shared/Navbar';

//Components
import Store from './components/Store';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Store />
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
