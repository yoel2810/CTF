import { SxProps, Theme } from "@mui/material";

const sxStyles = (
  sx: SxProps<Theme> | undefined
): { container: SxProps<Theme> } => {
  return {
    container: {
      backdropFilter: "blur(9.6px)",
      WebkitBackdropFilter: "blur(9.6px)",
      backgroundColor: "rgba(21, 255, 244, 0.2)",
      padding: "5rem",
      display: "flex",
      flexDirection: "column",
      borderColor: "#15fff4",
      borderWidth: "0.05em",
      borderStyle: "solid",
      borderRadius: "0.25em",
      boxShadow: "inset 0 0 1em 0 #15fff4, 0 0 1em 0 #15fff4",
      ...sx,
    },
  };
};

export default sxStyles;
