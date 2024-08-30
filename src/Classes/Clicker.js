import React, { useState } from 'react';

function Clicker() {
  // Initialize state with 0
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); 
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Test button</button>
    </div>
  );
}

export default Clicker;
