/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
// import React, {useState} from "react";
import React, {useState} from "react";
import "./Counter.css";


function Counter({ counter }) {
  let [value, countValue] = useState(counter);
  let changedValue;
  value = 0

  const countReduce = () => {
    changedValue = value - 1;
    countValue(changedValue);
  };

  const countIncrease = () => {
    changedValue = value + 1;
    countValue(changedValue);
  };

  return (
    <div className="counter-container">
      <button className="counter-minus" type="button" onClick={countReduce}>
        -
      </button>
      <div className="counter-result">{`${value}`}</div>
      <button className="counter-plus" type="button" onClick={countIncrease}>
        +
      </button>
    </div>
  );
}

export default Counter;
