import { LevelButton } from "../LevelButton/LevelButton";
import { Grid } from "@mui/material";

export type LevelButtonsProps = {
  levelsNumber: number;
};

export const LevelButtons = ({ levelsNumber }: LevelButtonsProps) => {
  return (
    <Grid container rowSpacing={8}>
      {Array.from(Array(levelsNumber).keys()).map((level) => (
        <Grid item xs={3}>
          <LevelButton level={(level + 1).toString()} />
        </Grid>
      ))}
    </Grid>
  );
};
