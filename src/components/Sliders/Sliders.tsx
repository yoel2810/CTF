import { useState } from "react";
import { Box, Typography } from "@mui/material";

export type SlidersProps = {
  children: JSX.Element[];
};

const Sliders = ({ children }: SlidersProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const leftClickHandle = () => {
    setCurrentSlide((prev: number) => {
      if (prev === 0) {
        return children.length - 1;
      }
      return prev - 1;
    });
  };

  const rightClickHandle = () => {
    setCurrentSlide((prev: number) => {
      if (prev === children.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Typography onClick={leftClickHandle}>{"<"}</Typography>
      {children[currentSlide]}
      <Typography onClick={rightClickHandle}>{">"}</Typography>
    </Box>
  );
};

export default Sliders;
