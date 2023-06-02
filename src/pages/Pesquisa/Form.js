import React, { useContext } from 'react'
import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks';
import pesquisaFormData from '../../utils/pesquisaForm.json';
import Questions from '../../components/Questions';
import PesquisaContext from '../../context/PesquisaContext';
import QuestionContext from '../../context/QuestionContext';

function Form() {
  const { question: { currentIndex } } = useContext(QuestionContext);
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
        {
          (currentIndex >= fields.length) ? (
            <div>
              <p>Você terminou todas as perguntas, clique no botão abaixo para ver seu resultado. Obs: ao clicar no botão abaixo você concorda com nossa política de privacidade (link)</p>
              <button className='finish-bussola-form-button' type='submit'>Finalizar</button>
            </div>
          ) : (
            <></>
          )
        }
      </form>
    </GoogleFormProvider>
  )
}

export default Form;
