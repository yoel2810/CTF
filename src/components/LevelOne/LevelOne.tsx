import riddles from "./riddles";
import Sliders from "../Sliders/Sliders";
import { RiddleAndAnswer } from "../RiddleAndAnswer/RiddleAndAnswer";
import { ChangeEvent, useState } from "react";
import { ShowPasswordIcon } from "../ShowPasswordIcon/ShowPasswordIcon";
import { PasswordReveal } from "../PasswordReveal/PasswordReveal";

const LevelOne = () => {
  const [finished, setFinished] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputValues, setInputValues] = useState(
    Array(riddles.length).fill("")
  );
  const [isCorrectArray, setIsCorrectArray] = useState(
    Array(riddles.length).fill(false)
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

    if (riddles[currentSlide].answers.includes(value.toLowerCase())) {
      setIsCorrectArray((prev) => {
        const newIsCorrectArray = [...prev];
        newIsCorrectArray[currentSlide] = true;
        if (newIsCorrectArray.every((isCorrect) => isCorrect)) {
          setFinished(true);
        }
        return newIsCorrectArray;
      });
    }
  };

  const handlePasswordIconClick = () => {
    setShowPassword(true);
  };

  return (
    <>
      {finished && <ShowPasswordIcon onClick={handlePasswordIconClick} />}
      {showPassword && <PasswordReveal password="0123456" />}
      <Sliders>
        {riddles.map((riddle, index) => (
          <RiddleAndAnswer
            key={riddle.riddle}
            onChange={(event) => handleInputChange(event, index)}
            inputValue={inputValues[index]}
            answers={riddle.answers}
            riddle={riddle.riddle}
            isCorrect={isCorrectArray[index]}
          />
        ))}
      </Sliders>
    </>
  );
};

export default LevelOne;
