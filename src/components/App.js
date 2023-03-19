import React, { useState } from "react";
import "./app.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
// const API = "https://www.cbr-xml-daily.ru/latest.js";

function App() {
  const [value, setValue] = useState({
    num: "",
  });

  function handleChange(e) {
    const obj = {
      [e.target.name]: e.target.value,
    };
    setValue(obj.num);
  }
  const [result, setResult] = useState(0);

  const [valuta, setValuta] = useState(null);

  function onTenge() {
    setResult((result) => Math.round(value * 451.96));
    setValuta(valuta => valuta = 'т')
  }
  function onEuro() {
    setResult((result) => Math.round(value * 0.93));
    setValuta(valuta => valuta = '€')
  }
  function onSom() {
    setResult((result) => Math.round(value * 87.42));
    setValuta(valuta => valuta = 'с')
  }
  function onRubl() {
    setResult((result) => Math.round(value * 76.96));
    setValuta(valuta => valuta = 'р')
  }

  return (
    <div class="app">
      <div className="container w-100 d-flex">
      <input
        name="num"
        onChange={(e) => handleChange(e)}
        type="text"
        className="counter"
        placeholder="$"
      />
      <h1 style={{marginTop: '25px',}} >=</h1>
      <div className="counter">{result}{valuta}</div>
      </div>

      <div className="controls">
        <button onClick={onTenge}>T</button>
        <button onClick={onEuro}>€</button>
        <button onClick={onSom}>SOM</button>
        <button onClick={onRubl}>₽</button>
      </div>
    </div>
  );
}

export default App;
