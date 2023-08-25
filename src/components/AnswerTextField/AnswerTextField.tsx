import { useState } from "react";
import { InputBase, SxProps, Theme } from "@mui/material";
import sxStyles from "./sxStyles";

export type AnswerTextFieldProps = {
  answers: string[];
  sx?: SxProps<Theme>;
};

export const AnswerTextField = ({ answers, sx }: AnswerTextFieldProps) => {
  const [value, setValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputContent = event.target.value;
    setValue(inputContent);
    if (answers.includes(inputContent.toLowerCase())) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <InputBase
      value={value}
      onChange={handleChange}
      sx={{
        ...sxStyles(isCorrect),
        ...sx,
      }}
      placeholder="Answer"
    />
  );
};
