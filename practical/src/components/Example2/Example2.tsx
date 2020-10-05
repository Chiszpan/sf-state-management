import React, { useState } from "react";
import Child from "./Child/Child";

const Example2 = () => {
  const [count, setCount] = useState<number>(100);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <Child count={count}/>
    </div>
  );
}

export default Example2;
