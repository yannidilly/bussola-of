import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Form from './Form';

function Pesquisa() {
  const history = useHistory();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('pesquisa')) !== null) {
      history.push('/bussola-of/norte');
    }
    if (!localStorage.getItem('points')) {
      history.push('/bussola-of');
    }
  });

  return (
    <div className='pesquisa-page'>
      <Form />
    </div>
  );
}

export default Pesquisa;