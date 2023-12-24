
import './App.css';
import Accordion from './Component/Accordion';
import Random_color from './Component/Random_color';
import StarRating from './Component/Star-Rating';

function App() {
  return (
    <div className="App">

       {/* Accordion Component */}
      <Accordion/>

      {/* Random Color Component */}
      <Random_color/>

      {/* Star Rating */}
      <StarRating noOfStars={10}/>

    </div>
  );
}

export default App;
