import React, { useContext } from 'react'
import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks';
import { useHistory } from 'react-router-dom';
import pesquisaFormData from '../../utils/pesquisaForm.json';
import Questions from '../../components/Questions';
import PesquisaContext from '../../context/PesquisaContext';
import QuestionContext from '../../context/QuestionContext';
import '../../styles/pages/Pesquisa.css';

function Form() {
  const { question: { currentIndex } } = useContext(QuestionContext);
  const { pesquisaForm: { fields } } = useContext(PesquisaContext);
  const history = useHistory();

  const methods = useGoogleForm({ form: pesquisaFormData });

  const onSubmit = async (data) => {
    localStorage.setItem('pesquisa', JSON.stringify('preenchida'));
    await methods.submitToGoogleForms(data);
    history.push('/norte');
  };

  return (
    <GoogleFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Questions fields={ fields }/>
        {
          (currentIndex >= fields.length) ? (
            <div className='pesquisa-page'>
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
