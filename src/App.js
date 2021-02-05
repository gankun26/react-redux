import { Provider } from 'react-redux'
import store from './store'

import Lista from './components/lista'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Lista />
      </div>
    </Provider>
  );
}

export default App;
