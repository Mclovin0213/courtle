import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";
import DynamicLetterWordle from "./components/DynamicLetterWordle";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-center" />
      <Box>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/five" element={<DynamicLetterWordle word_length={5} number_of_guesses={6} words_path="../assets/words5.txt" />} />
          <Route path="/six" element={<DynamicLetterWordle word_length={6} number_of_guesses={8} words_path="../assets/words6.txt" />} />
          <Route path="/seven" element={<DynamicLetterWordle word_length={7} number_of_guesses={10} words_path="../assets/words7.txt" />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
