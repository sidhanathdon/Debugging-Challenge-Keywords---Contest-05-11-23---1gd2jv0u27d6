import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {
  const alert_warn=() => { alert("cant edit it")};
  [count, setCount] = useState(0)
  const incre=() => { setCount(count + 1) };
  return (
    <div className="ball">
      <h1 className="count" ondoubleclick={ alert_warn}>{count}</h1>
      <button className='increment-button' onclick={incre}>Increment</button>
    </div>
  )
}


export default App;