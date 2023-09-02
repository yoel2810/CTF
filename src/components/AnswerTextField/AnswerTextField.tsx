import { InputBase, SxProps, Theme } from "@mui/material";
import sxStyles from "./sxStyles";

export type AnswerTextFieldProps = {
  value: string;
  isCorrect: boolean;
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
};

export const AnswerTextField = ({
  value,
  isCorrect,
  handleChange,
  sx,
}: AnswerTextFieldProps) => {
  return (
    <InputBase
      autoFocus
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
