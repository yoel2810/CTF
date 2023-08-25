import { SxProps, Theme } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import sxStyles from "./sxStyles";

export type QuotationMarkProps = {
  sx?: SxProps<Theme>;
};

export const QuotationMark = ({ sx = {} }: QuotationMarkProps) => {
  return (
    <FormatQuoteIcon
      sx={{
        ...sx,
        ...sxStyles.quotationMark,
      }}
    />
  );
};
