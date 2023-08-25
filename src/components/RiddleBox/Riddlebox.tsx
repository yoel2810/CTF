import { SxProps, Theme, Typography } from "@mui/material";
import { GlassBox } from "../GlassBox/GlassBox";
import { QuotationMark } from "../QuotationMark/QuotationMark";
import sxStyles from "./sxStyles";

export type RiddleBoxProps = {
  riddle: string;
  sx?: SxProps<Theme>;
};

export const RiddleBox = ({ riddle, sx }: RiddleBoxProps) => {
  return (
    <GlassBox sx={{ ...sxStyles.container, ...sx }}>
      <QuotationMark sx={sxStyles.firstQuotationMark} />
      <Typography sx={sxStyles.content}>{riddle}</Typography>
      <QuotationMark sx={sxStyles.lastQuotationMark} />
    </GlassBox>
  );
};
