import { useEffect, useState } from "react";
import DynamicWordleGrid from "./grid/DynamicWordleGrid.tsx";
import { WORDS } from "../words.ts";
import { duration, Stack } from "@mui/material";
import Keyboard from "./keyboard/Keyboard.tsx";
import toast from "react-hot-toast";

const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;

const FiveLetterWordle = () => {
  const [attemptsRemaining, setAttemptsRemaining] = useState(NUMBER_OF_GUESSES);
  const [currentAttempt, setCurrentAttempt] = useState<string[]>(
    Array(WORD_LENGTH).fill("")
  );
  const [nextLetter, setNextLetter] = useState(0);
  const [correctWord, setCorrectWord] = useState("");
  const [board, setBoard] = useState(
    Array(NUMBER_OF_GUESSES).fill(Array(WORD_LENGTH).fill(""))
  );
  const [rowColors, setRowColors] = useState(
    Array(NUMBER_OF_GUESSES).fill(Array(WORD_LENGTH).fill("transparent"))
  );
  const [gameOver, setGameOver] = useState(false);
  const [keyboardColors, setKeyboardColors] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    setCorrectWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
  }, []);

  console.log(correctWord);

  const handleKeyPress = (key: string) => {
    if (gameOver) return;

    if (key === "Del") {
      deleteLetter();
    } else if (key === "Enter") {
      checkGuess();
    } else if (/^[a-zA-Z]$/.test(key)) {
      insertLetter(key);
    }
  };

  const insertLetter = (key: string) => {
    if (nextLetter >= WORD_LENGTH || gameOver) return;

    const newCurrentGuess = currentAttempt;
    newCurrentGuess[nextLetter] = key.toLowerCase();
    setCurrentAttempt(newCurrentGuess);
    setNextLetter(nextLetter + 1);

    const newBoard = [...board];
    newBoard[NUMBER_OF_GUESSES - attemptsRemaining] = newCurrentGuess;
    setBoard(newBoard);
  };

  const deleteLetter = () => {
    if (nextLetter === 0 || gameOver) return;

    const newCurrentGuess = currentAttempt;
    newCurrentGuess[nextLetter - 1] = "";
    setCurrentAttempt(newCurrentGuess);
    setNextLetter(nextLetter - 1);

    const newBoard = [...board];
    newBoard[NUMBER_OF_GUESSES - attemptsRemaining] = newCurrentGuess;
    setBoard(newBoard);
  };

  const checkGuess = () => {
    if (currentAttempt.includes("") || gameOver) {
      toast.error("Not enough letters, Try Again");
      return;
    }

    const guessString = currentAttempt.join("");
    if (!WORDS.includes(guessString)) {
      toast.error("Not a word");
      return;
    }

    const newBoard = [...board];
    const newRowColors = [...rowColors];
    const row = newBoard[NUMBER_OF_GUESSES - attemptsRemaining];
    const rightGuess = Array.from(correctWord);

    const letterColors = Array(WORD_LENGTH).fill("gray");
    const newKeyboardColors = { ...keyboardColors };

    for (let i = 0; i < WORD_LENGTH; i++) {
      if (currentAttempt[i] === rightGuess[i]) {
        letterColors[i] = "green";
        rightGuess[i] = "#";
        newKeyboardColors[currentAttempt[i]] = "green";
      } else if (rightGuess.includes(currentAttempt[i])) {
        letterColors[i] = "yellow";
        rightGuess[rightGuess.indexOf(currentAttempt[i])] = "#";
        newKeyboardColors[currentAttempt[i]] = "yellow";
      } else {
        newKeyboardColors[currentAttempt[i]] = "gray";
      }
    }

    newRowColors[NUMBER_OF_GUESSES - attemptsRemaining] = letterColors;
    setRowColors(newRowColors);
    setKeyboardColors(newKeyboardColors);

    for (let i = 0; i < WORD_LENGTH; i++) {
      row[i] = currentAttempt[i];
    }

    setBoard(newBoard);

    if (guessString === correctWord) {
      toast.success("Congrats! You got the correct word!", { duration: 5000 });
      setGameOver(true);
      return;
    }

    const newGuessesRemaining = attemptsRemaining - 1;
    setAttemptsRemaining(newGuessesRemaining);
    setCurrentAttempt(Array(WORD_LENGTH).fill(""));
    setNextLetter(0);

    if (newGuessesRemaining === 0) {
      console.log("You've run out of guesses! Game over!");
      console.log(`The correct word was: "${correctWord}"`);
      setGameOver(true);
    }
  };

  return (
    <Stack direction={"column"}>
      <DynamicWordleGrid attempts={board} rowColors={rowColors} />
      <Keyboard onKeyPress={handleKeyPress} keyboardColors={keyboardColors} />
    </Stack>
  );
};

export default FiveLetterWordle;
