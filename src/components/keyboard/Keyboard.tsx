import KeyboardRow from "./KeyRow";
import { Grid2 } from "@mui/material";

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  keyboardColors: { [key: string]: string };
}

const Keyboard = ({ onKeyPress, keyboardColors }: KeyboardProps) => {
  const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const thirdRow = ["Del", "z", "x", "c", "v", "b", "n", "m", "Enter"];

  return (
    <Grid2
      container
      direction={"column"}
      sx={{
        margin: "1rem 0",
        alignItems: "center",
      }}
    >
      <KeyboardRow
        keys={firstRow}
        onKeyPress={onKeyPress}
        keyboardColors={keyboardColors}
      />
      <KeyboardRow
        keys={secondRow}
        onKeyPress={onKeyPress}
        keyboardColors={keyboardColors}
      />
      <KeyboardRow
        keys={thirdRow}
        onKeyPress={onKeyPress}
        keyboardColors={keyboardColors}
      />
    </Grid2>
  );
};

export default Keyboard;
