import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'swiper/components/autoplay';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import App from './App';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
