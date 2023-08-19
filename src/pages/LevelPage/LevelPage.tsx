import { TextChanger } from "../../components/TextChanger/TextChanger";
import { useState } from "react";

type LevelPageProps = {
  isStartAnimation: boolean;
  LevelComponent: JSX.Element;
};

const LevelPage = ({ isStartAnimation, LevelComponent }: LevelPageProps) => {
  const [finishedAnimation, setFinishedAnimation] = useState(!isStartAnimation);

  return !finishedAnimation ? (
    <TextChanger
      finishedAnimation={finishedAnimation}
      setFinishedAnimation={setFinishedAnimation}
      listOfPrompts={[
        "Wow!",
        "First Level!",
        "How Exciting!",
        "Let's Start With a Few Riddles",
      ]}
    />
  ) : (
    LevelComponent
  );
};

export default LevelPage;
