import React, { useState } from "react";

function PercentDiv ({setPercent}) {

  const falseArray = [];
  var arr = [];
  const n = 5;
  for(var i=0; i<n; i++) arr.push(false);
  
  const [active, setActive] = useState(arr);

  const activeStyle = {
    backgroundColor: "hsl(172, 67%, 45%)",
    color: "hsl(183, 100%, 15%)"
  };

  function handleClick(val, id) {
    setPercent(val);

    arr = falseArray.slice();
    arr[id] = true;
    setActive(arr);
  }

  function handleChange(e) {
    setPercent(e.target.value);
    setActive(falseArray)
  }

  return (
    <div className="percent-div">
      <div style={{backgroundColor: active[0] && "hsl(172, 67%, 45%)"}} onClick={() => handleClick("5", 0)}>5%</div>
      <div style={{backgroundColor: active[1] && "hsl(172, 67%, 45%)"}} onClick={() => handleClick("10", 1)}>10%</div>
      <div style={{backgroundColor: active[2] && "hsl(172, 67%, 45%)"}} onClick={() => handleClick("15", 2)}>15%</div>
      <div style={{backgroundColor: active[3] && "hsl(172, 67%, 45%)"}} onClick={() => handleClick("25", 3)}>25%</div>
      <div style={{backgroundColor: active[4] && "hsl(172, 67%, 45%)"}} onClick={() => handleClick("50", 4)}>50%</div>
      <input className="custom custom-input" type="text" placeholder="Custom" onChange={handleChange}/>
    </div>
  )
}

export default PercentDiv;