import { useNavigate } from "react-router-dom";
import { LevelButton } from "../LevelButton/LevelButton";
import { Grid } from "@mui/material";

export type LevelButtonsProps = {
  levelsNumber: number;
};

export const LevelButtons = ({ levelsNumber }: LevelButtonsProps) => {
  const navigate = useNavigate();

  const handleClick = (level: number) => {
    navigate(`/levels/${level}`);
  };

  return (
    <Grid container rowSpacing={8}>
      {Array.from(Array(levelsNumber).keys()).map((level) => (
        <Grid key={level} item xs={3}>
          <LevelButton
            onClick={() => handleClick(level + 1)}
            level={(level + 1).toString()}
          />
        </Grid>
      ))}
    </Grid>
  );
};
