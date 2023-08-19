import { NeonButton } from "../NeonButton/NeonButton";

export type LevelButtonProps = {
  level: string;
};

export const LevelButton = ({ level }: LevelButtonProps) => {
  const handleClick = () => {};

  return (
    <NeonButton
      sx={{ width: "2em", height: "2em" }}
      text={level}
      onClick={handleClick}
    />
  );
};
