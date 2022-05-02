import { WORDS } from "../constants/wordlist";
import { VALID_GUESSES } from "../constants/validGuesses";
import {
  WRONG_SPOT_MESSAGE,
  NOT_CONTAINED_MESSAGE,
} from "../constants/strings";
import { getGuessStatuses } from "./statusestaah";
import { default as GraphemeSplitter } from "grapheme-splitter";
import axios from "axios";

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(localeAwareLowerCase(word)) ||
    VALID_GUESSES.includes(localeAwareLowerCase(word))
  );
};

export const isWinningWord = (word: string) => {
  return solution === word;
};
export const isWinningWordTaah = (word: string) => {
  return solution3 === word;
};

export const findFirstUnusedReveal = (word: string, guesses: string[]) => {
  if (guesses.length === 0) {
    return false;
  }

  const lettersLeftArray = new Array<string>();
  const guess = guesses[guesses.length - 1];
  const statuses = getGuessStatuses(guess);
  for (let i = 0; i < guess.length; i++) {
    if (statuses[i] === "correct" || statuses[i] === "present") {
      lettersLeftArray.push(guess[i]);
    }
    if (statuses[i] === "correct" && word[i] !== guess[i]) {
      return WRONG_SPOT_MESSAGE(guess[i], i + 1);
    }
  }

  let n;
  for (const letter of word) {
    n = lettersLeftArray.indexOf(letter);
    if (n !== -1) {
      lettersLeftArray.splice(n, 1);
    }
  }

  if (lettersLeftArray.length > 0) {
    return NOT_CONTAINED_MESSAGE(lettersLeftArray[0]);
  }
  return false;
};

export const unicodeSplit = (word: string) => {
  return new GraphemeSplitter().splitGraphemes(word);
};

export const unicodeLength = (word: string) => {
  return unicodeSplit(word).length;
};

export const localeAwareLowerCase = (text: string) => {
  return process.env.REACT_APP_LOCALE_STRING
    ? text.toLocaleLowerCase(process.env.REACT_APP_LOCALE_STRING)
    : text.toLowerCase();
};

export const localeAwareUpperCase = (text: string) => {
  return process.env.REACT_APP_LOCALE_STRING
    ? text.toLocaleUpperCase(process.env.REACT_APP_LOCALE_STRING)
    : text.toUpperCase();
};

export const getWordOfDay = () => {
  const epochMs = new Date(2022, 0).valueOf();
  const now = Date.now();
  const msInDay = 86400000;
  const index = Math.floor((now - epochMs) / msInDay);
  const nextday = (index + 1) * msInDay + epochMs;

  return {
    solution: localeAwareUpperCase(WORDS[index % WORDS.length]),
    solutionIndex: index,
    tomorrow: nextday,
  };
};

export const getLinkWord = async (link: string) => {
  var Word: string = "";
  const responce = await axios.get(
    `https://test.taalda.games/api/linkword?link=` + link
  );
  solution3 = responce.data;
  Word = responce.data;
  return Word;
};

export let solution3: string = "";
export const sendCreate = async (WORD: string) => {
  var Word: string = "";
  if (WORD === "random") {
    Word = localeAwareUpperCase(WORDS[Math.floor(Math.random() * 10000) + 1]);
    const article = { word: Word };
    const responce = await axios.post(
      "https://test.taalda.games/api/create",
      article
    );
    Word = responce.data;
    return Word;
  } else {
    const article = { word: WORD };
    const responce = await axios.post(
      "https://test.taalda.games/api/create",
      article
    );
    Word = responce.data;

    return Word;
  }
};
export const { solution, solutionIndex, tomorrow } = getWordOfDay();
