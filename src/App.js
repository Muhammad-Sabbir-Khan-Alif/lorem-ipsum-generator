import React, { useState } from "react";
import text from "./components/api";
import './index.css'
import Output from "./components/output";
function App() {
  const [texts, setTexts] = useState(null)
  const [number, setNumber] = useState(1)
  const handleChange = (event) => {
    setNumber(event.target.value)
  }
  const handleNumber = () => {
    setTexts(text.slice([0], [number]))
    if(number > 8 || number < 1){
      alert('Enter a number between 1 - 8')
      setNumber(1)
    }
  }
  return (
    <div>
      <div className="container main-div">
        <h3 className="main-heading">Tired of boring lorem ipsum?</h3>
        <div className="select-div">
          <p className="para-text">Paragraph : </p>
          <input type="number" name="select" id="select" max={8} min={1} value={number} onChange={handleChange} />
          <button className="gen-btn" onClick={handleNumber}>Generate</button>
        </div>
        <div className="output-div">
          <Output paragraphs={texts} />
        </div>
      </div>
    </div>
  );
}
export default App;
