import { Stack } from "@mui/material";
import WordCell from "./WordCell";

interface WordRowProps {
  attempt: string[];
  colors: string[];
}

const WordRow = ({ attempt, colors }: WordRowProps) => {
  return (
    <Stack direction={"row"}>
      {attempt.map((letter, index) => (
        <WordCell key={index} letter={letter} color={colors[index]} />
      ))}
    </Stack>
  );
};

export default WordRow;
