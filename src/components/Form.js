import React, { useContext } from 'react'
import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks'
import form from '../utils/googleForm.json';
import QuestionContext from '../context/QuestionContext';
import FormContext from '../context/FormContext';
import Questions from './Questions';
import { useHistory } from 'react-router-dom';

function Form() {
  const { question: { currentIndex } } = useContext(QuestionContext);
  const { form: { fields } } = useContext(FormContext);
  const history = useHistory();

  const methods = useGoogleForm({ form })
  const onSubmit = async (data) => {
    await methods.submitToGoogleForms(data);
    history.push('/pesquisa');
  };

  return (
    <GoogleFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Questions />
        <div>
          {
            (currentIndex >= fields.length) ? (
              <div className='finish-bussola-form-div'>
                <p>
                  Você está a um passo de descobrir o que tem norteado sua Jornada Financeira até hoje.
                </p>
                <p>
                  Lembre-se de que conhecer seu Norte é o primeiro passo para tomar decisões mais informadas e alcançar seus objetivos financeiros.
                </p>
                <button className='finish-bussola-form-button' type='submit'>Próximo Passo</button>
              </div>
            ) : (
              <></>
            )
          }
        </div>
      </form>
    </GoogleFormProvider>
  );
}

export default Form;
