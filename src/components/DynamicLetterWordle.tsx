import { useEffect, useState } from "react";
import WordleGrid from "./grid/WordleGrid.tsx";
import { Stack } from "@mui/material";
import Keyboard from "./keyboard/Keyboard.tsx";
import toast from "react-hot-toast";
import { getWordsArray } from "../scripts/words5.ts";

interface DynamicLetterWordleProps {
  word_length: number;
  number_of_guesses: number;
  words_path: string;
}

const DynamicLetterWordle = ({ word_length, number_of_guesses, words_path }: DynamicLetterWordleProps) => {
  const WORDS = getWordsArray(words_path)

  const [attemptsRemaining, setAttemptsRemaining] = useState(number_of_guesses);
  const [nextLetter, setNextLetter] = useState(0);
  const [currentAttempt, setCurrentAttempt] = useState<string[]>(
    Array(word_length).fill("")
  );

  const [correctWord, setCorrectWord] = useState("");
  const [board, setBoard] = useState(
    Array(number_of_guesses).fill(Array(word_length).fill(""))
  );
  const [rowColors, setRowColors] = useState(
    Array(number_of_guesses).fill(Array(word_length).fill("transparent"))
  );
  const [gameOver, setGameOver] = useState(false);
  const [keyboardColors, setKeyboardColors] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    setCorrectWord(WORDS[Math.floor(Math.random() * WORDS.length)].toLowerCase());
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
    if (nextLetter >= word_length || gameOver) return;

    const newCurrentGuess = currentAttempt;
    newCurrentGuess[nextLetter] = key.toLowerCase();
    setCurrentAttempt(newCurrentGuess);
    setNextLetter(nextLetter + 1);

    const newBoard = [...board];
    newBoard[number_of_guesses - attemptsRemaining] = newCurrentGuess;
    setBoard(newBoard);
  };

  const deleteLetter = () => {
    if (nextLetter === 0 || gameOver) return;

    const newCurrentGuess = currentAttempt;
    newCurrentGuess[nextLetter - 1] = "";
    setCurrentAttempt(newCurrentGuess);
    setNextLetter(nextLetter - 1);

    const newBoard = [...board];
    newBoard[word_length - attemptsRemaining] = newCurrentGuess;
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
    const row = newBoard[number_of_guesses - attemptsRemaining];
    const rightGuess = Array.from(correctWord);

    const letterColors = Array(word_length).fill("gray");
    const newKeyboardColors = { ...keyboardColors };

    for (let i = 0; i < word_length; i++) {
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

    newRowColors[number_of_guesses - attemptsRemaining] = letterColors;
    setRowColors(newRowColors);
    setKeyboardColors(newKeyboardColors);

    for (let i = 0; i < word_length; i++) {
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
    setCurrentAttempt(Array(word_length).fill(""));
    setNextLetter(0);

    if (newGuessesRemaining === 0) {
      console.log("You've run out of guesses! Game over!");
      console.log(`The correct word was: "${correctWord}"`);
      setGameOver(true);
    }
  };

  return (
    <Stack direction={"column"}>
      <WordleGrid attempts={board} rowColors={rowColors} />
      <Keyboard onKeyPress={handleKeyPress} keyboardColors={keyboardColors} />
    </Stack>
  );
};

export default DynamicLetterWordle;
