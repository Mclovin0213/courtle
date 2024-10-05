import { Grid2 } from "@mui/material";

interface KeyProps {
  letter: string;
  onClick: (key: string) => void;
  color: string;
}

const KeyButton = ({ letter, onClick, color }: KeyProps) => {
  return (
    <Grid2
      onClick={() => onClick(letter)}
      sx={{
        border: "1px solid black",
        borderRadius: "10",
        fontSize: "1.5rem",
        fontWeight: 700,
        padding: "0.5rem",
        margin: "0.2rem",
        cursor: "pointer",
        backgroundColor: color,
        textTransform: "uppercase",
      }}
    >
      {letter.toUpperCase()}
    </Grid2>
  );
};

export default KeyButton;
