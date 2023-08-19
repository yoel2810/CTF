import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { SxProps, Theme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export type TextChangerProps = {
  listOfPrompts: string[];
  finishedAnimation: boolean;
  setFinishedAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  sx?: SxProps<Theme>;
};

export const TextChanger = ({
  listOfPrompts,
  finishedAnimation,
  setFinishedAnimation,
  sx,
}: TextChangerProps) => {
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
    reset: finishedAnimation,
    onRest: () => {
      if (index >= listOfPrompts.length - 1) {
        setFinishedAnimation(true);
      }
      setIndex(index + 1);
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
        <Typography sx={{ fontSize: "3rem", ...sx }} variant="h1">
          {listOfPrompts[index]}
        </Typography>
      </animated.div>
    </div>
  );
};
