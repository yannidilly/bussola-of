import React, { useContext } from 'react';
import FormContext from '../../context/FormContext';
import Form from './Form';

function Pesquisa() {
  const { form } = useContext(FormContext);


  return (
    <div className='pesquisa-page'>
      <h1>{ form.title }</h1>
      <Form>

      </Form>
    </div>
  );
}

export default Pesquisa;