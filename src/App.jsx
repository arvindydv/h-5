import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [length, setLength] = useState(1);
  const [newData, setNewData] = useState([]);

  const genrateTxt = () => {
    if (length == 0 || length > 8) {
      alert("length must be less 9 and greater than 0");
      return;
    }

    let temp = [];
    for (let i = 0; i < length; i++) {
      temp[i] = data[i];
    }
    setNewData(temp);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">TIRED OF BORING LOREM IPSUM?</h1>
        <div className="flex">
          <label htmlFor="">Paragraphs:</label>
          <input
            type="number"
            name=""
            id=""
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <button onClick={genrateTxt}>Genrate</button>
        </div>

        <div className="para">
          {newData.map((data) => {
            return <p className="txt">{data.txt}</p>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
