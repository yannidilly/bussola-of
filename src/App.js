import React, { useState } from 'react';
import bussolaFormData from './utils/bussolaForm.json';
import pesquisaFormData from './utils/pesquisaForm.json';
import BussolaContext from './context/BussolaContext';
import PesquisaContext from './context/PesquisaContext';
import QuestionContext from './context/QuestionContext';
import PointsContext from './context/PointsContext';
import Pages from './pages';

function App() {
  const [bussolaForm, setbussolaForm] = useState({ ...bussolaFormData });
  const [pesquisaForm, setPesquisaForm] = useState({ ...pesquisaFormData });
  const [points, setPoints] = useState({ points: {} });
  const [question, setQuestion] = useState({ currentIndex: 0 });

  return (
    <PesquisaContext.Provider value={ { pesquisaForm, setPesquisaForm } }>
      <BussolaContext.Provider value={ { bussolaForm, setbussolaForm } }>
        <PointsContext.Provider value={ { points, setPoints } }>
          <QuestionContext.Provider value={ { question, setQuestion } }>
            <Pages />
          </QuestionContext.Provider>
        </PointsContext.Provider>
      </BussolaContext.Provider>
    </PesquisaContext.Provider>
  );
}

export default App;
