import { NeonButton } from "../NeonButton/NeonButton";
import sxStyles from "./sxStyles";

export type LevelButtonProps = {
  level: string;
  onClick: () => void;
};

export const LevelButton = ({ level, onClick }: LevelButtonProps) => {
  return <NeonButton sx={sxStyles} text={level} onClick={onClick} />;
};
