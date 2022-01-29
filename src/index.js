import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Components/NavBar/navbar'
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="test" element={<Navbar />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
