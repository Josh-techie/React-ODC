import React, { useState } from 'react';

function Counter() {
  // Initialize a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div class="bg-slate-500">
      <h1>  <b> Counter App </b> </h1>
      <p>Count: {count}</p>
      <button  onClick={increment}>Increment</button><br></br>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;