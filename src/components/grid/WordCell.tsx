import { Box } from "@mui/material";

interface WordCellProps {
  letter: string;
  color: string;
}

const boxStyle = (color: string) => ({
  border: "2px solid gray",
  borderRadius: "3px",
  margin: "2px",
  fontSize: "2.5rem",
  fontWeight: 700,
  height: "3rem",
  width: "3rem",
  display: "flex",
  justifyContent: "center",
  backgroundColor: color,
  alignItems: "center",
  textTransform: "uppercase",
});

const WordCell = ({ letter, color }: WordCellProps) => {
  return <Box sx={boxStyle(color)}>{letter.toUpperCase()}</Box>;
};

export default WordCell;
