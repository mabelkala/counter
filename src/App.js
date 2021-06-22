import { useState } from "react";
import "./App.css";
const App = () => {
  const [counter, setCounter] = useState(0);
  const Mabel = () => {
    setCounter(counter + 1);
  };
  const Mabel2 = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="Mabel">
      <h1> Mabel Counter App</h1>
      <div className="buttons">
        <button className="button1" onClick={Mabel}>
          +
        </button>
        <div className="may">{counter}</div>
        <button className="button2" onClick={Mabel2}>
          -
        </button>
      </div>
    </div>
  );
};

export default App;
