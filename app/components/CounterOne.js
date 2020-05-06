import React, { useReducer } from "react";

const initialValue = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "reset":
      return initialValue;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h2>First Counter {count.firstCounter} </h2>
      <h2>Second Counter {count.secondCounter} </h2>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>

      <button onClick={() => dispatch({ type: "increment2", value: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 10 })}>
        Decrement 10
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterOne;
