import React, { useState } from 'react';
import bussolaFormData from './utils/bussolaForm.json';
import QuestionContext from './context/QuestionContext';
import BussolaContext from './context/BussolaContext';
import Pages from './pages';

function App() {
  const [bussolaForm, setbussolaForm] = useState({ ...bussolaFormData });
  const [question, setQuestion] = useState({ currentIndex: 0 });

  return (
    <BussolaContext.Provider value={ { bussolaForm, setbussolaForm } }>
      <QuestionContext.Provider value={ { question, setQuestion } }>
        <Pages />
      </QuestionContext.Provider>
    </BussolaContext.Provider>
  );
}

export default App;
