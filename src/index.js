import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './DefaultComponent/index';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './redux/store'
// const Lazycomponent = React.lazy(() => import('./App2'))
// const Lazycomponent = React.lazy(() => import('../DefaultComponent'))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Suspense fallback={<div>Loading</div>}>
        <Lazycomponent />
      </Suspense> */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
