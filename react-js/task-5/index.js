import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'plus':
      return {
        ...state,
        count: state.count + 1
      }
      case 'minus':
        return {
          ...state,
          count: state.count - 1
        }
        case 'reset':
          return {
            ...state,
            count: state.count = 0
          }
    default: {
      return state
    }
  }
}

export const store = createStore(reducer, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider  store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
