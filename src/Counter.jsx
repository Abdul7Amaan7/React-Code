import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("adrak")
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button className="btn btn-danger" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
