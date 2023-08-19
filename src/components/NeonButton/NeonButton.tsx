import { ButtonBase } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import sxStyles from "./sxStyles";

export type NeonButtonProps = {
  text: string;
  onClick: () => void;
  sx?: SxProps<Theme>;
};

export const NeonButton = ({ text, onClick, sx }: NeonButtonProps) => {
  return (
    <>
      <ButtonBase onClick={onClick} sx={sxStyles(sx)}>
        {text}
      </ButtonBase>
    </>
  );
};
