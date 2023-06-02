import React from 'react'
import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks';
import pesquisaForm from '../../utils/pesquisaForm.json';

function Form() {

  const methods = useGoogleForm({ form: pesquisaForm });

  const onSubmit = async (data) => {
    await methods.submitToGoogleForms(data);
    console.log(data);
  };

  return (
    <GoogleFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <p>oi</p>
        <button className='finish-bussola-form-button' type='submit'>Finalizar</button>
      </form>
    </GoogleFormProvider>
  )
}

export default Form;
