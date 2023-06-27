import React, { useContext } from 'react'
import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks'
import { useHistory } from 'react-router-dom';
import bussolaFormData from '../../utils/bussolaForm.json';
import QuestionContext from '../../context/QuestionContext';
import BussolaContext from '../../context/BussolaContext';
import Questions from '../../components/Questions';
import PointsContext from '../../context/PointsContext';
import formatFormAnswer from '../../utils/formatFormAnswer';

function Form() {
  const { question: { currentIndex } } = useContext(QuestionContext);
  const { bussolaForm: { fields } } = useContext(BussolaContext);
  const { setPoints } = useContext(PointsContext);
  const history = useHistory();

  const methods = useGoogleForm({ form: bussolaFormData });

  const onSubmit = async (data) => {
    const formatedData = formatFormAnswer(data);
    localStorage.setItem('points', JSON.stringify(formatedData));
    await setPoints(formatedData);
    await methods.submitToGoogleForms(data);
    history.push('/pesquisa');
  };

  return (
    <GoogleFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Questions fields={ fields } />
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
                <button type='submit'>Próximo Passo</button>
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
