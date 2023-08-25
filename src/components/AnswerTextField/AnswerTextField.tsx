import { useState } from "react";
import { InputBase, SxProps, Theme } from "@mui/material";

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
        backdropFilter: "blur(9.6px)",
        WebkitBackdropFilter: "blur(9.6px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderColor: isCorrect ? "green" : "red",
        borderWidth: "0.05em",
        borderStyle: "solid",
        borderRadius: "0.25em",
        boxShadow: `0 0 1em 0 ${isCorrect ? "green" : "red"}`,
        padding: "1rem",
        width: "100%",
        fontSize: "1.5rem",
        ...sx,
      }}
      placeholder="Answer"
    />
  );
};
