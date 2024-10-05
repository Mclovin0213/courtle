import Key from "./Key";
import { Grid2 } from "@mui/material";

interface KeyRowProps {
  keys: string[];
  onKeyPress: (key: string) => void;
  keyboardColors: { [key: string]: string };
}

const KeyRow = ({ keys, onKeyPress, keyboardColors }: KeyRowProps) => {
  return (
    <Grid2 container direction={"row"}>
      {keys.map((key, index) => (
        <Key
          key={index}
          letter={key}
          onClick={onKeyPress}
          color={keyboardColors[key]}
        />
      ))}
    </Grid2>
  );
};

export default KeyRow;
