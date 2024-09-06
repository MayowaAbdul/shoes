import React from 'react';
import { useState, useEffect } from "react";

function Cart() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      });
  return (
    <div>
      <h4>I have rendered {count} times!</h4>
    </div>
  )
}

export default Cart;
