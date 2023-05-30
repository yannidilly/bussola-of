import React, { useState } from 'react';
import googleForm from './utils/googleForm.json';
import QuestionContext from './context/QuestionContext';
import FormContext from './context/FormContext';
import Pages from './pages';

function App() {
  const [form, setForm] = useState({ ...googleForm });
  const [question, setQuestion] = useState({ currentIndex: 0 });

  return (
    <FormContext.Provider value={ { form, setForm } }>
      <QuestionContext.Provider value={ { question, setQuestion } }>
        <Pages />
      </QuestionContext.Provider>
    </FormContext.Provider>
  );
}

export default App;
