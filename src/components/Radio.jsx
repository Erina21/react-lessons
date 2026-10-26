import React, { useState } from "react";

function Radio() {
  const [selectedOption, setSelectedOption] = useState("option1");
  return (
    <div>
      <input
        type="radio"
        name="options"
        value="option1"
        checked={selectedOption === "option1"}
        onChange={() => setSelectedOption("option1")}></input>
      <input
        type="radio"
        name="options"
        value="option2"
        checked={selectedOption === "option2"}
        onChange={() => setSelectedOption("option2")}></input>
      <input
        type="radio"
        name="options"
        value="option3"
        checked={selectedOption === "option3"}
        onChange={() => setSelectedOption("option3")}></input>
      <p>
        {selectedOption === "option1"
          ? "Option 1 selected"
          : selectedOption === "option2"
            ? "Option 2 selected"
            : selectedOption === "option3"
              ? "Option 3 selected"
              : "No option selected"}
      </p>
    </div>
  );
}

export default Radio;
