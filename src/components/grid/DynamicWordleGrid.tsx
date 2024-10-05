import { Box } from "@mui/material";
import WordRow from "./WordRow";

interface DynamicWordleGridProps {
  attempts: string[][];
  rowColors: string[][];
}

const DynamicWordleGrid = ({ attempts, rowColors }: DynamicWordleGridProps) => {
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

export default DynamicWordleGrid;
