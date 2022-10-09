import './App.css';

//Context
import ProductContextProvider from './context/ProductContextProvider';

//Components
import Store from './components/Store';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Store />
      </ProductContextProvider>
    </div>
  );
}

export default App;
