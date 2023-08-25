import { LevelButtons } from "../../components/LevelButtons/LevelButtons";
import { Typography } from "@mui/material";
import sxStyles from "./sxStyles";

const LevelsPage = () => {
  return (
    <>
      <Typography sx={sxStyles.title} variant="h1" component="h1">
        Levels
      </Typography>
      <LevelButtons levelsNumber={12} />
    </>
  );
};

export default LevelsPage;
