import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [string, setString] = useState("");
  const [finalValue, setFinal] = useState("");

  function AddValue(event) {
    let value = event.target.value;
    setString((prev) => prev + value);
  }

  function RemoveValue() {
    setString("");
    setFinal("");
  }

  function evaluateExpression(expression) {
    try {
      // Evaluate the expression safely using Function constructor
      let result = Function('"use strict";return (' + expression + ')')();
      setFinal(result);
    } catch (error) {
      setFinal("Error");
    }
  }

  function endButton() {
    evaluateExpression(string);
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" style={{ width: "300px", height: "30px", margin: "10px" }} value={string} readOnly />
      <div>{finalValue}</div>
      <br />
      <div>
        <button onClick={AddValue} value="7" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>7</button>
        <button onClick={AddValue} value="8" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>8</button>
        <button onClick={AddValue} value="9" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>9</button>
        <button onClick={AddValue} value="+" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>+</button>
        <br />
        <button onClick={AddValue} value="4" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>4</button>
        <button onClick={AddValue} value="5" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>5</button>
        <button onClick={AddValue} value="6" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>6</button>
        <button onClick={AddValue} value="-" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>-</button>
        <br />
        <button onClick={AddValue} value="1" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>1</button>
        <button onClick={AddValue} value="2" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>2</button>
        <button onClick={AddValue} value="3" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>3</button>
        <button onClick={AddValue} value="*" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>*</button>
        <br />
        <button onClick={RemoveValue} value="C" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>C</button>
        <button onClick={AddValue} value="0" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>0</button>
        <button onClick={endButton} value="=" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>=</button>
        <button onClick={AddValue} value="/" style={{ padding: "20px", border: "2px solid black", borderRadius: "10px", margin: "10px" }}>/</button>
      </div>
    </div>
  );
}

export default App;
