import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { SxProps, Theme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export type TextChangerProps = {
  listOfPrompts: string[];
  sx?: SxProps<Theme>;
};

export const TextChanger = ({ listOfPrompts, sx }: TextChangerProps) => {
  const [index, setIndex] = useState(0);

  const props = useSpring({
    from: { opacity: 1, transform: "translateY(0px)" },
    to: [
      { opacity: 1, transform: "translateY(0px)" },
      { opacity: 0, transform: "translateY(-50px)" },
    ],
    delay: 500,
    config: {
      duration: 1000,
    },
    onRest: () => {
      setIndex((index + 1) % listOfPrompts.length);
    },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <animated.div style={{ ...props }}>
        <Typography
          sx={{ fontSize: "3rem", fontFamily: "Orbitron", ...sx }}
          variant="h1"
        >
          {listOfPrompts[index]}
        </Typography>
      </animated.div>
    </div>
  );
};
