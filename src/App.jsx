import './css/App.css';
import Counter from './components/Counter';

function App() {
  function avelacnelucHeto( tiv ) {
    console.log( `he he avelacrinq`, tiv );
  }

  return (
    <div className="App">
      <Counter onAvelacnel={avelacnelucHeto} />
    </div>
  );
}

export default App;
