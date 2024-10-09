import { Box } from "@mui/material";
import WordRow from "./WordRow";

interface WordleGridProps {
  attempts: string[][];
  rowColors: string[][];
}

const WordleGrid = ({ attempts, rowColors }: WordleGridProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {attempts.map((attempt, index) => (
        <WordRow key={index} attempt={attempt} colors={rowColors[index]} />
      ))}
    </Box>
  );
};

export default WordleGrid;
