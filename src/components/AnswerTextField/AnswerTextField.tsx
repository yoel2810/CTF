import { useEffect, useState } from "react";
import { InputBase, SxProps, Theme } from "@mui/material";
import sxStyles from "./sxStyles";

export type AnswerTextFieldProps = {
  answers: string[];
  value: string;
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
};

export const AnswerTextField = ({
  answers,
  value,
  handleChange,
  sx,
}: AnswerTextFieldProps) => {
  const [isCorrect, setIsCorrect] = useState(
    answers.includes(value.toLowerCase())
  );

  useEffect(() => {
    setIsCorrect(answers.includes(value.toLowerCase()));
  }, [value, answers]);

  return (
    <InputBase
      value={value}
      disabled={isCorrect}
      onChange={handleChange}
      sx={{
        ...sxStyles(isCorrect),
        ...sx,
      }}
      placeholder="Answer"
    />
  );
};
