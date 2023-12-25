import "./App.css";
import Accordion from "./Component/Accordion";
import ImageSlider from "./Component/Image-Slider";
import Random_color from "./Component/Random_color";
import StarRating from "./Component/Star-Rating";

function App() {
  return (
    <div className="App">
      {/* Accordion Component */}
      <Accordion />

      {/* Random Color Component */}
      <Random_color />

      {/* Star Rating */}
      <StarRating noOfStars={10} />

      {/* Image Slider */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
