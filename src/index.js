import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

import Input from "./Input";
import C from "./C";
import D from "./D";
import E from "./E";

import "./styles.css";

const B = () => <p>hey</p>;

function App() {
  const [value, setValue] = useState();
  const [secondInput, setSecondInput] = useState();
  const [isE, setIsE] = useState(true);

  return (
    <div className="App">
      <h1>Callbacks caching examdples:dddd</h1>

      <div className="part">
        <h3>Using useCallback hook:</h3>
        <Input onChange={useCallback(e => setValue(e.target.value), [])} />
        <p>Input value is: {value}</p>
      </div>

      <div className="part">
        <h3>Without useCallback hook:</h3>
        <Input
          onChange={function(e) {
            setSecondInput(e.target.value);
          }}
        />
        <p>Input value is: {secondInput}</p>
      </div>

      <div className="part">
        <h3>C</h3>
        <C Wrap={B} />
        {/* <C
          Wrap={useCallback(
            () => (
              <p>dddffffffffff</p>
            ),
            []
          )} */}
      </div>

      <div className="part">
        <h3>D</h3>
        <D onChange={useCallback(e => setValue(e.target.value), [])} />
      </div>

      <div className="part">
        <h3>E</h3>
        <E
          onChange={useCallback(e => setValue(e.target.value), [])}
          isE={isE}
        />
        <button onClick={useCallback(e => setIsE(!isE), [isE])}>
          myButton
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
