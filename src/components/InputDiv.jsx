import React from "react";
import PercentDiv from "./PercentDiv";
import {ReactComponent as Dollar} from "./svg_files/icon-dollar.svg";
import {ReactComponent as Person} from "./svg_files/icon-person.svg";

function InputDiv ({bill, setBill, percent, setPercent, person, setPerson}) {

  return (
    <div className="input-div">
      <div>
        <p>Bill</p>
        <div className="input-section">
          <Dollar />
          <input className="input" type="text" placeholder="0" value={bill} onChange={(e) => setBill(e.target.value)}/>
        </div>
      </div>
      <div>
        <p>Select Tip %</p>
        <PercentDiv 
          setPercent={(value) => setPercent(value)}
        />
      </div>
      <div>
        <p>Number of People</p>
        <div className="input-section">
          <Person />
          <input className="input" type="text" placeholder="0" value={person} onChange={(e) => setPerson(e.target.value)}/>
        </div>
      </div>
    </div>
  )
}

export default InputDiv;