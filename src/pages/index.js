import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Bussola from './Bussola/index';
import Norte from './Norte';
import Pesquisa from './Pesquisa';
import Seguranca from './Norte/Seguranca';
import Prazer from './Norte/Prazer';
import Momento from './Norte/Momento';
import Conformidade from './Norte/Conformidade';
import Controle from './Norte/Controle';

function Pages() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Bussola } />
      <Route exact path="/norte" component={ Norte } />
      <Route exact path="/pesquisa" component={ Pesquisa } />
      <Route exact path="/norte/SP" component={ Seguranca }/>
      <Route exact path="/norte/PG" component={ Prazer }/>
      <Route exact path="/norte/EMD" component={ Momento }/>
      <Route exact path="/norte/CD" component={ Conformidade }/>
      <Route exact path="/norte/CF" component={ Controle }/>
    </BrowserRouter>
  );
}

export default Pages;
