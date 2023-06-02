import React, { useState } from 'react';
import bussolaFormData from './utils/bussolaForm.json';
import pesquisaFormData from './utils/pesquisaForm.json';
import BussolaContext from './context/BussolaContext';
import PesquisaContext from './context/PesquisaContext';
import QuestionContext from './context/QuestionContext';
import AnswersContext from './context/AnswersContext';
import Pages from './pages';

function App() {
  const [bussolaForm, setbussolaForm] = useState({ ...bussolaFormData });
  const [pesquisaForm, setPesquisaForm] = useState({ ...pesquisaFormData });
  const [answers, setAnswers] = useState({ answers: {} });
  const [question, setQuestion] = useState({ currentIndex: 0 });

  return (
    <PesquisaContext.Provider value={ { pesquisaForm, setPesquisaForm } }>
      <BussolaContext.Provider value={ { bussolaForm, setbussolaForm } }>
        <AnswersContext.Provider value={ { answers, setAnswers } }>
          <QuestionContext.Provider value={ { question, setQuestion } }>
            <Pages />
          </QuestionContext.Provider>
        </AnswersContext.Provider>
      </BussolaContext.Provider>
    </PesquisaContext.Provider>
  );
}

export default App;
