import './App.css';

//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

//Components
import Store from './components/Store';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Store />
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
