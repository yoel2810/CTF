import { SxProps, Theme } from "@mui/material/styles";

const sxStyles = (sx: SxProps<Theme> | undefined) => ({
  fontSize: "3rem",
  color: "#15fff4",
  display: "#15fff4",
  cursor: "pointer",
  textDecoration: "none",
  borderColor: "#15fff4",
  borderWidth: "0.05em",
  borderStyle: "solid",
  borderRadius: "0.25em",
  textShadow: "0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.25em currentColor",
  boxShadow: "inset 0 0 0.5em 0 #15fff4, 0 0 0.5em 0 #15fff4",
  position: "relative",

  ":before": {
    content: "''",
    pointerEvents: "none",
    position: "absolute",
    background: "#15fff4",
    top: "120%",
    left: "0",
    width: "100%",
    height: "100%",
    transform: "perspective(1em) rotateX(40deg) scale(1, 0.35)",
    filter: "blur(1.5em)",
    opacity: "0",
    transition: "opacity 500ms linear",
  },
  ":after": {
    content: "''",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    boxShadow: "0 0 2em 0.5em #15fff4",
    opacity: "0",
    transition: "opacity 500ms linear",
  },
  ":hover, :focus": {
    background: "#15fff4",
    color: "#242424",
    textShadow: "none",
  },
  ":hover:before, :focus:before": {
    opacity: "1",
  },
  ":hover:after, :focus:after": {
    opacity: "1",
  },
  ...sx,
});

export default sxStyles;
