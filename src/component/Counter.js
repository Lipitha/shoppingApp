import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = (event) => {
    if (count === 0) {
      event.preventDefault();
    } else {
      setCount(count - 1);
    }
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Count :{count}</h1>
      <button name="Increment" onClick={incrementCount}>
        Increment
      </button>
      <button name="Decrement" onClick={decrementCount}>
        Decrement
      </button>
      <button name="Reset" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}
export default Counter;
