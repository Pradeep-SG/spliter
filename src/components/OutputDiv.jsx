import React from "react";
// import {ReactComponent as Dollar} from "./svg_files/icon-dollar.svg";

function OutputDiv ({tip, total, handleReset}) {
  return (
    <div className="output-div">
      <div className="output-section">
        <div>
          <p>Tip Amount</p>
          <p className="per">/ person</p>
        </div>
        <h1>{tip}</h1>
      </div>
      <div className="output-section">
        <div>
          <p>Total Amount</p>
          <p className="per">/ person</p>
        </div>
        <h1>{total}</h1>
      </div>
      <div className="btn-div">
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  )
}

export default OutputDiv;