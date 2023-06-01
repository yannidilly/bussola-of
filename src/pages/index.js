import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Bussola from './Bussola/index';
import Norte from './Norte';
import Pesquisa from './Pesquisa';

function Pages() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Bussola } />
      <Route exact path="/norte" component={ Norte } />
      <Route exact path="/pesquisa" component={ Pesquisa } />
    </BrowserRouter>
  );
}

export default Pages;
