import React, { useContext, useState } from 'react';
import FormContext from '../context/FormContext';
import Form from '../components/Form';
import '../styles/pages/Bussola.css';

function Bussola() {
  const { form } = useContext(FormContext);
  const [start, setStart] = useState(false);

  const onClickStartButton = () => {
    setStart(true);
  }

  return (
    <div className="bussola-page">
      {
        (!start) ? (
          <div className='intro-section'>
            <h1>{ form.title }</h1>
            <p>Leia cada pergunta com atenção antes de responder.</p>
            <p>Marque 1 se não se identificar com a frase e 5 se tiver uma forte identificação.</p>
            <p>Lembre-se de que não é possível voltar atrás após selecionar uma resposta.</p>
            <button type='button' onClick={ onClickStartButton }>Iniciar</button>
          </div>
        ) :
        (
          <Form />
        )
      }
    </div>
  );
}

export default Bussola;
