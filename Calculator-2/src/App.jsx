// import "./App.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  let [calVal, setcalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      setcalVal(eval(calVal));
    } else {
      const newDisplay = calVal + buttonText;
      setcalVal(newDisplay);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display calVal={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
