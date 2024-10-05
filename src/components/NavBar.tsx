import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent={"center"}>
        <Typography variant="h1">
          <Link
            to={"/"}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
            }}
          >
            Wordle
          </Link>
        </Typography>
      </Stack>
    </>
  );
};

export default NavBar;
