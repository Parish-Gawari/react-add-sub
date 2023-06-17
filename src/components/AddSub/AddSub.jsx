import { useState } from "react";
import "../AddSub/AddSub.css";

const AddSub = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState(0);
  

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onAdd = () => {
    setResult(parseInt(result) + parseInt(input));
  };

  const onSub = () => {
    setResult(parseInt(result) - parseInt(input));
  };
  const onReset = () => {
    setResult(0);
    
  };
  return (
    <>
      <div>
        <label htmlFor="value" id="label">
          Enter a number to add/sub:{" "}
        </label>
        <input
          type="Number"
          placeholder="Enter a number here"
          id="value"
          onChange={onChange} 
        />
      </div>
      <button onClick={onAdd} id="Add">
        Add
      </button>
      <button onClick={onSub} id="Sub">
        Sub
      </button>
      <button onClick={onReset} id="Reset">
        Reset
      </button>
      <br />
      <div>Results: {result}</div>
    </>
  );
};

export default AddSub;
