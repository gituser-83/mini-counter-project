import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    count > 0 && setCount(count - 1);
  };
  return (
    <>
      <div className="container">
        <div className="showCount">
          <h2>{count}</h2>
        </div>
        <div className="btn">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
        <div className="reset">
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
