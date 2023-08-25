import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
import sxStyles from "./sxStyles";

export type GlassBoxProps = {
  children?: ReactNode;
  sx?: SxProps<Theme>;
};

export const GlassBox = ({ sx, children }: GlassBoxProps) => {
  return <Box sx={sxStyles(sx).container}>{children}</Box>;
};
