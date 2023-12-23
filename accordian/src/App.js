import logo from './logo.svg';
import './App.css';
import Accordion from './Component/Accordion';
import Random_color from './Component/Random_color';

function App() {
  return (
    <div className="App">

       {/* Accordion Component */}
      <Accordion/>

      {/* Random Color Component */}
      <Random_color/>

    </div>
  );
}

export default App;
