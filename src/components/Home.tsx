import {
  Box,
  Button,
  Stack,
  Container,
} from "@mui/material";

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
            <Button variant="outlined" sx={buttonStyle}>
              5 Letter Words
            </Button>
            <Button variant="outlined" sx={buttonStyle}>
              6 Letter Words
            </Button>
            <Button variant="outlined" sx={buttonStyle}>
              7 letter Words
            </Button>
          </Stack>
      </Stack>
    </>
  );
};

export default Home;
