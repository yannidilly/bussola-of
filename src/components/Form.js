import React from 'react';
import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks'
import form from '../utils/googleForm.json';
import Questions from './Questions';

function Form() {
  const methods = useGoogleForm({ form })
  const onSubmit = async (data) => {
    console.log('>>> Here is the data', data)
    await methods.submitToGoogleForms(data)
    alert('Form submitted with success!')
  }

  return (
    <GoogleFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Questions />
        <button type='submit'>Finalizar</button>
      </form>
    </GoogleFormProvider>
  );
}

export default Form;
