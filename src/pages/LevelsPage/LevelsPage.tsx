import { LevelButtons } from "../../components/LevelButtons/LevelButtons";
import { Typography } from "@mui/material";

const LevelsPage = () => {
  return (
    <>
      <Typography variant="h1" component="h1" gutterBottom>
        Levels
      </Typography>
      <LevelButtons levelsNumber={12} />
    </>
  );
};

export default LevelsPage;
