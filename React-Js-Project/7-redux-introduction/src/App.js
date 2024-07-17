import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/duck/counter";

function App() {
  const count = useSelector((state) => state?.counter?.count);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHnadler = () => {
    dispatch(decrement());
  };
  return (
    <div className="App">
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        &nbsp;
        <button onClick={decrementHnadler}>DECREMENT</button>
      </div>
    </div>
  );
}

export default App;
