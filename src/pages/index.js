import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Result from './Result';

function Pages() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route exact path="/resultado" component={ Result } />
    </BrowserRouter>
  );
}

export default Pages;
