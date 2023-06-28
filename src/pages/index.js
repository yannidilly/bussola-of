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
      <Route exact path="/bussola/" component={ Bussola } />
      <Route exact path="/bussola/norte" component={ Norte } />
      <Route exact path="/bussola/pesquisa" component={ Pesquisa } />
      <Route exact path="/bussola/norte/SP" component={ Seguranca }/>
      <Route exact path="/bussola/norte/PG" component={ Prazer }/>
      <Route exact path="/bussola/norte/EMD" component={ Momento }/>
      <Route exact path="/bussola/norte/CD" component={ Conformidade }/>
      <Route exact path="/bussola/norte/CF" component={ Controle }/>
    </BrowserRouter>
  );
}

export default Pages;
