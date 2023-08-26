import { useState } from "react";
import { Box } from "@mui/material";
import { ArrowIcon } from "../ArrowIcon/ArrowIcon";
import sxStyles from "./sxStyles";

export type SlidersProps = {
  children: JSX.Element[];
};

const Sliders = ({ children }: SlidersProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const leftClickHandle = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return children.length - 1;
      }
      return prev - 1;
    });
  };

  const rightClickHandle = () => {
    setCurrentSlide((prev) => {
      if (prev === children.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <Box sx={sxStyles.container}>
      <ArrowIcon direction="left" onClick={leftClickHandle} />
      {children[currentSlide]}
      <ArrowIcon direction="right" onClick={rightClickHandle} />
    </Box>
  );
};

export default Sliders;
