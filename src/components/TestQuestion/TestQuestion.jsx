import React, { useState } from "react";
import { TestContext } from "../../App";
import './testQuestion.css'

const TestQuestion = ({singleQuestion}) => {
  const [selectedOption, setSelectedOption] = useState({});
  const sum = React.useContext(TestContext);

  const handleChange = (option) => {
    setSelectedOption(option)
    sum[singleQuestion[0]] = option.score
  }

  return (
    <div className='testQuestion'>
      <div>{singleQuestion && singleQuestion[1]}</div>
      {singleQuestion.slice(2).map((option) => (
        <label key={option.id}>
          <input
            type="radio"
            value={option.id}
            checked={selectedOption.id === option.id}
            onChange={() => handleChange(option)}
          />
          {option.text}
        </label>
      ))}
    </div>
  );
};

export default TestQuestion;
