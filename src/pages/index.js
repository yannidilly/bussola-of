import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Bussola from './Bussola';
import Norte from './Norte';

function Pages() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Bussola } />
      <Route exact path="/norte" component={ Norte } />
    </BrowserRouter>
  );
}

export default Pages;
