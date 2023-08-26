import { keyframes } from "@emotion/react";

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-0.25rem);
  }
  100% {
    transform: translateX(0);
  }
`;

const sxStyles = (direction: "left" | "right") => ({
  icon: {
    fontSize: "5rem",
    cursor: "pointer",
    borderRadius: "50%",
    border: "1px solid #15fff4",
    color: "#15fff4",
    boxShadow: "inset 0 0 0.1em 0 #15fff4, 0 0 0.1em 0 #15fff4",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform:
        direction === "left" ? "translateX(-0.25rem)" : "translateX(0.25rem)",
      animation: `${slideAnimation} 0.5s ease-in-out infinite`,
    },
  },
});

export default sxStyles;
