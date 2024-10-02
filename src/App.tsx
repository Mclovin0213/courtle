import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";
import FiveLetterWordle from "./components/FiveLetterWordle";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<FiveLetterWordle />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
