import React from "react";
import { LikePicker } from "./like_picker";
import { useState } from "react";

export const BasicLikePicker = () => {
  const [stars, setStars] = useState(1);
  function handleChange(value: number) {
    setStars(value);
  }
  return (
    <div className="App">
      <LikePicker
        max={5}
        value={stars}
        onChange={handleChange}
        starStyle={{ fontSize: "3em" }}
        descriptionStyle={{ fontSize: "1em" }}
        valueDescription={{
          1: "bad",
          2: "normal",
          3: "good",
          4: "great",
          5: "excellent",
        }}
      />
    </div>
  );
};
