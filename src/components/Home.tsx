import React from "react";
import {
  Box,
  Button,
  Stack,
  styled,
  Typography,
  Container,
} from "@mui/material";

const Home = () => {
  const buttonStyle = {
    width: "100%",
  };

  return (
    <>
      <Container>
        <Stack
          direction={"column"}
          sx={{
            border: "1px solid green",
          }}
          alignItems={"center"}
        >
          <Box
            sx={{
              width: 200,
            }}
          >
            <Stack direction={"column"} gap={2}>
              <Button variant="outlined" sx={buttonStyle}>
                Active Player Names
              </Button>
              <Button variant="outlined" sx={buttonStyle}>
                All-Time Player Names
              </Button>
              <Button variant="outlined" sx={buttonStyle}>
                Team Names
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
