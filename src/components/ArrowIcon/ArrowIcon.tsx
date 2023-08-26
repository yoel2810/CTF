import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import sxStyles from "./sxStyles";

export type ArrowIconProps = {
  direction: "left" | "right";
  onClick: () => void;
};

export const ArrowIcon = ({ direction, onClick }: ArrowIconProps) => {
  const Icon =
    direction === "left" ? ArrowCircleLeftIcon : ArrowCircleRightIcon;

  return <Icon sx={sxStyles(direction).icon} onClick={onClick} />;
};
