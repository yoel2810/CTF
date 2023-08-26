import riddles from "./riddles";
import Sliders from "../Sliders/Sliders";
import { RiddleAndAnswer } from "../RiddleAndAnswer/RiddleAndAnswer";
import { ChangeEvent, useState } from "react";

const LevelOne = () => {
  const [inputValues, setInputValues] = useState(
    Array(riddles.length).fill("")
  );

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    currentSlide: number
  ) => {
    const { value } = event.target;
    setInputValues((prev) => {
      const newInputValues = [...prev];
      newInputValues[currentSlide] = value;
      return newInputValues;
    });
  };

  return (
    <Sliders>
      {riddles.map((riddle, index) => (
        <RiddleAndAnswer
          key={riddle.riddle}
          onChange={(event) => handleInputChange(event, index)}
          inputValue={inputValues[index]}
          answers={riddle.answers}
          riddle={riddle.riddle}
        />
      ))}
    </Sliders>
  );
};

export default LevelOne;
