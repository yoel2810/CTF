import { Typography } from "@mui/material";
import { TextChanger } from "../../components/TextChanger/TextChanger";

const LevelOne = () => {
  return (
    <TextChanger
      listOfPrompts={[
        "Wow!",
        "First Level!",
        "How Exciting!",
        "Let's Start With a Few Riddles",
      ]}
    />
  );
};

export default LevelOne;
