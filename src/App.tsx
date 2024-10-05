import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";
import FiveLetterWordle from "./components/FiveLetterWordle";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-center" />
      <Box>
        <NavBar />
        <Routes>
          <Route path="/" element={<FiveLetterWordle />} />
          {/* <Route path="/five" element={<FiveLetterWordle />} /> */}
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
