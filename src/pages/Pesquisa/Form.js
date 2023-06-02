import React, { useContext } from 'react'
import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks';
import pesquisaFormData from '../../utils/pesquisaForm.json';
import Questions from '../../components/Questions';
import PesquisaContext from '../../context/PesquisaContext';

function Form() {
  const { pesquisaForm: { fields } } = useContext(PesquisaContext);

  const methods = useGoogleForm({ form: pesquisaFormData });

  const onSubmit = async (data) => {
    await methods.submitToGoogleForms(data);
    console.log(data);
  };

  return (
    <GoogleFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Questions fields={ fields }/>
        <button className='finish-bussola-form-button' type='submit'>Finalizar</button>
      </form>
    </GoogleFormProvider>
  )
}

export default Form;
