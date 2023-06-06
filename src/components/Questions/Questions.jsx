import React, { useState } from "react";
import data from "../../data";
import TestQuestion from "../TestQuestion/TestQuestion";
import { TestContext } from "../../App";
import resultsObj from "../../results";
import './questions.css'

const Questions = () => {
  const [results, setResults] = useState(false);
  const sum = React.useContext(TestContext);
  const [score, setScore] = useState(0);
  console.log(Object.values(resultsObj)[5])
  const submitHandler = (e) => {
    e.preventDefault();
    setResults(true);
    setScore(sum.reduce((acc, curr) => acc + curr));
  };

  return (
    <div>
      <form>
        <label>Тест</label>
        {data.map((item) => (
          <TestQuestion key={item[0]} singleQuestion={item} />
        ))}
        <button className='btn' type="sumbit" onClick={(e) => submitHandler(e)}>
          Результаты
        </button>
      </form>
      {results && (
        <div>
          <p>{`Score: ${score}`}</p>
          <p>{Object.values(resultsObj)[score]}</p>
        </div>
      )}
    </div>
  );
};

export default Questions;
