import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const buttonStyle = {
    width: "100%",
  };

  return (
    <>
      <Stack
        direction={"column"}
        sx={{
          border: "1px solid green",
        }}
        alignItems={"center"}
      >
        <Stack direction={"column"} gap={2}>
          <Link to={"/five"}>
            <Button variant="outlined" sx={buttonStyle}>
              Play Wordle
            </Button>
          </Link>
          <Link to={'/six'}>
            <Button variant="outlined" sx={buttonStyle}>
              6 Letter Words
            </Button>
          </Link>
          <Link to={'/seven'}>
            <Button variant="outlined" sx={buttonStyle}>
              7 letter Words
            </Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
