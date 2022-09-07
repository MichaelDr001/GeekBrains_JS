import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import { store } from './redux/InitialStore';// persist


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    {/* <PersistGate persistor = {persist}>
    </PersistGate> */}
    <App />
  </Provider>
);
