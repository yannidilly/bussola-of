import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Form from './Form';

function Pesquisa() {
  const history = useHistory();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('pesquisa')) !== null) {
      history.push('/norte');
    }
  });

  return (
    <div className='pesquisa-page'>
      <h1>Bússola</h1>
      <Form>

      </Form>
    </div>
  );
}

export default Pesquisa;