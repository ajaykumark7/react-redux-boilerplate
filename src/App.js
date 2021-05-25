import './App.css';
import Counter from './Components/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './Store/reducer'

//STEP 4: Create the Redux store
//STEP 7: Pass the reducer function to the store
const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      {/* STEP 5: Pass the store to the Provider */}
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
