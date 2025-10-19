import { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="box">
        {show && <Counter />}
        <button id="toggle-counter" onClick={() => setShow((prev) => !prev)}>
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
};

export default App;
