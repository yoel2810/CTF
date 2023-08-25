import { Box } from "@mui/material";
import riddles from "./riddles";
import sxStyles from "./sxStyles";
import Sliders from "../Sliders/Sliders";
import { RiddleAndAnswer } from "../RiddleAndAnswer/RiddleAndAnswer";

const LevelOne = () => {
  return (
    <>
      <Sliders>
        {riddles.map((riddle) => (
          <Box key={riddle.riddle} sx={sxStyles.container}>
            <RiddleAndAnswer answers={riddle.answers} riddle={riddle.riddle} />
          </Box>
        ))}
      </Sliders>
    </>
  );
};

export default LevelOne;
