import { Box } from "@mui/material";
import { RiddleBox } from "../RiddleBox/Riddlebox";
import { AnswerTextField } from "../AnswerTextField/AnswerTextField";
import sxStyles from "./sxStyles";
import { ChangeEvent } from "react";

export type RiddleAndAnswerProps = {
  riddle: string;
  answers: string[];
  inputValue: string;
  isCorrect: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const RiddleAndAnswer = ({
  riddle,
  inputValue,
  isCorrect,
  onChange,
}: RiddleAndAnswerProps) => {
  return (
    <Box sx={sxStyles.container}>
      <RiddleBox riddle={riddle} />
      <AnswerTextField
        handleChange={onChange}
        value={inputValue}
        isCorrect={isCorrect}
        sx={sxStyles.input}
      />
    </Box>
  );
};
