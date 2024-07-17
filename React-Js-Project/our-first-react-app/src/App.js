import { useState } from "react";
import "./App.css";
import DisplayCount from "./components/DisplayCount";
import ContactUs from "./components/ContactUs";

const tasks = [
  {
    name: "task one",
  },
  {
    name: "task one",
  },
  {
    name: "task one",
  },
  {
    name: "task one",
  },
  {
    name: "task one",
  },
  {
    name: "task one",
  },
];


function App() {
  // let count = 0;
  const [count, setCount] = useState(0);
  const [isShowThisElement, setIsShowThisElement] = useState(true);

  const incrementBtnHandler = () => {
    // count = count + 1;
    setCount(count + 1); // is setCount ke piche wo re render karega
    // console.log(count, "clicked!");
  };

  const decrementBtnHandler = () => {
    setCount(count - 1);
  };

  const showBtnHandler = () => {
    setIsShowThisElement(true);
  };

  const hideBtnHandler = () => {
    setIsShowThisElement(false);
  };


  

  console.log("component is re-rendering");
  return (
    <div className="App">
      <DisplayCount count={count}    />
      <button onClick={incrementBtnHandler}>Increment</button> &nbsp;
      <button onClick={decrementBtnHandler}>Decrement</button>
      <br />
      {isShowThisElement && <h1>Show This Element</h1>}
      <button onClick={showBtnHandler}>Show</button> &nbsp;
      <button onClick={hideBtnHandler}>Hide</button> &nbsp;
      <button
        onClick={() => {
          setIsShowThisElement(!isShowThisElement);
        }}
      >
        Show/Hide
      </button>


       {/* LISTING or LOOP */}
       {tasks.map((singleTask,index) => {
        return <p key={index}>{singleTask.name}</p>
       })}
       <ContactUs />
    </div>
  );
}

export default App;
