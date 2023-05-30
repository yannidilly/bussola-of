import React, { useContext } from 'react';
import FormContext from '../context/FormContext';
import Form from '../components/Form';

function Home() {
  const { form } = useContext(FormContext);

  return (
    <div className="App">
      <h1>{ form.title }</h1>
      <Form />
    </div>
  );
}

export default Home;
