import React, { useContext } from 'react'
import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks'
import form from '../utils/googleForm.json';
import QuestionContext from '../context/QuestionContext';
import FormContext from '../context/FormContext';
import Questions from './Questions';

function Form() {
  const { question: { currentIndex } } = useContext(QuestionContext);
  const { form: { fields } } = useContext(FormContext);

  const methods = useGoogleForm({ form })
  const onSubmit = async (data) => {
    await methods.submitToGoogleForms(data)
    alert('Form submitted with success!')
  }

  return (
    <GoogleFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Questions />
        <div>
          {
            (currentIndex >= fields.length) ? (
              <div className='finish-bussola-form-div'>
                <p>
                  Você está um passo mais perto de descobrir o que tem norteado sua Jornada Financeira até hoje.
                </p>
                <p>
                  Lembre-se de que conhecer seu Norte é o primeiro passo para tomar decisões mais informadas e alcançar seus objetivos financeiros.
                </p>
                <p>
                  Clique no botão abaixo para descobrir seu Norte financeiro.
                </p>
                <button className='finish-bussola-form-button' type='submit'>Descobrir</button>
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
