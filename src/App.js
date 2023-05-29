import Question from "./components/Question";
import googleForm from './utils/googleForm.json';

function App() {
  return (
    <div className="App">
      <h1>{ googleForm.title }</h1>
      <Question fields={ googleForm.fields } />
    </div>
  );
}

export default App;
