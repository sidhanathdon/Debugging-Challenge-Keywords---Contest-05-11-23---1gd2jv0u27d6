import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {
  const alert_warn=() => { alert("cant edit it")};
  [count, setCount] = useState(0)
  const incre=() => { setCount(count + 1) };
  return (
    <div class="ball">
      <h1 class="count" ondoubleclick={ alert_warn}>{count}</h1>
      <button class='increment-button' onclick={incre}>Increment</button>
    </div>
  )
}


export default App;