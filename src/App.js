import React, { useState } from "react";
import InputDiv from "./components/InputDiv";
import OutputDiv from "./components/OutputDiv"

function App() {

  const [bill, setBill] = useState("142.55");
  const [percent, setPercent] = useState("15");
  const [person, setPerson] = useState("5");

  return (
    <div className="app">
      <div>
        <InputDiv 
          bill={bill}
          setBill={(value) => setBill(value)}
          setPercent={(value) => setPercent(value)}
          person={person}
          setPerson={(value) => setPerson(value)}
        />
      </div>
      <div>
        <OutputDiv
          tip={(parseFloat(bill.trim())*(parseFloat(percent.trim())/100)/parseFloat(person.trim())).toFixed(2)}
          total={(parseFloat(bill.trim())*(1 + parseFloat(percent.trim())/100)/parseFloat(person.trim())).toFixed(2)}
          handleReset={() => {
            setBill("100");
            setPercent("5");
            setPerson("5");
          }}
        />
      </div>
    </div>
  );
}

export default App;
