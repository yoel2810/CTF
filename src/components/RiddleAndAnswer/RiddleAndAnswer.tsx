import { Box } from "@mui/material";
import { RiddleBox } from "../RiddleBox/Riddlebox";
import { AnswerTextField } from "../AnswerTextField/AnswerTextField";
import sxStyles from "./sxStyles";
import { ChangeEvent } from "react";

export type RiddleAndAnswerProps = {
  riddle: string;
  answers: string[];
  inputValue: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const RiddleAndAnswer = ({
  riddle,
  answers,
  inputValue,
  onChange,
}: RiddleAndAnswerProps) => {
  return (
    <Box sx={sxStyles.container}>
      <RiddleBox riddle={riddle} />
      <AnswerTextField
        handleChange={onChange}
        value={inputValue}
        answers={answers}
        sx={sxStyles.input}
      />
    </Box>
  );
};
