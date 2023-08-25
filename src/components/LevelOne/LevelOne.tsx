import { Box } from "@mui/material";
import { RiddleAndAnswer } from "../RiddleAndAnswer/RiddleAndAnswer";
import riddles from "./riddles";

const LevelOne = () => {
  return (
    <Box
      sx={{
        width: "70vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RiddleAndAnswer
        answers={riddles[0].answers}
        riddle={riddles[0].riddle}
      />
    </Box>
  );
};

export default LevelOne;
