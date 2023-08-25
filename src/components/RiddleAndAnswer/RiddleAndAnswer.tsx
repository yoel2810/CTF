import { Box } from "@mui/material";
import { RiddleBox } from "../RiddleBox/Riddlebox";
import { AnswerTextField } from "../AnswerTextField/AnswerTextField";

export type RiddleAndAnswerProps = {
  riddle: string;
  answers: string[];
};

export const RiddleAndAnswer = ({ riddle, answers }: RiddleAndAnswerProps) => {
  return (
    <Box>
      <RiddleBox riddle={riddle} />
      <AnswerTextField answers={answers} sx={{ marginTop: "2rem" }} />
    </Box>
  );
};
