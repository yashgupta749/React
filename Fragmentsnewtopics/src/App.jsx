import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    // console.log(event);
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      //...is spread operator used to put all value present and put into new array that we formed
    }
  };

  return (
    <>
      <div className="Box">
        <Container>
          <h1 className="food-heading">Healthy Food</h1>
          <FoodInput handleKeyDown={onKeyDown}></FoodInput>
          <ErrorMessage items={foodItems}></ErrorMessage>
          <FoodItems items={foodItems}></FoodItems>
        </Container>
        <Container>
          <p>put your food item that you want to eat.</p>
        </Container>
      </div>
    </>
  );
}

export default App;
