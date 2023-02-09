import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import { setupStore } from './redux/store';
import App from './App';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='*' element={<App />} />
      </Routes>
    </Router>
  </Provider>
);

