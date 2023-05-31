import React, { useContext } from 'react'
import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks'
import form from '../utils/googleForm.json';
import QuestionContext from '../context/QuestionContext';
import Questions from './Questions';

function Form() {
  const { question: { currentIndex } } = useContext(QuestionContext);

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
        <div>
          {
            (currentIndex > 36) ? (
              <div>
                <p>Você terminou o teste</p>
                <button type='submit'>Finalizar</button>
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
