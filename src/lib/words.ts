import { WORDS } from '../constants/wordlist'
import { VALID_GUESSES } from '../constants/validGuesses'
import { WRONG_SPOT_MESSAGE, NOT_CONTAINED_MESSAGE } from '../constants/strings'
import { getGuessStatuses } from './statuses'
import { default as GraphemeSplitter } from 'grapheme-splitter'


export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(localeAwareLowerCase(word)) ||
    VALID_GUESSES.includes(localeAwareLowerCase(word))
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

//hetsu gorim shalgah heseg
export const findFirstUnusedReveal = (word: string, guesses: string[]) => {
  if (guesses.length === 0) {
    return false
  }

  const lettersLeftArray = new Array<string>()
  const guess = guesses[guesses.length - 1]
  const statuses = getGuessStatuses(guess)

  for (let i = 0; i < guess.length; i++) {
    if (statuses[i] === 'correct' || statuses[i] === 'present') {
      lettersLeftArray.push(guess[i])
    }
    if (statuses[i] === 'correct' && word[i] !== guess[i]) {
      return WRONG_SPOT_MESSAGE(guess[i], i + 1)
    }
  }

  let n
  for (const letter of word) {
    n = lettersLeftArray.indexOf(letter)
    if (n !== -1) {
      lettersLeftArray.splice(n, 1)
    }
  }

  if (lettersLeftArray.length > 0) {
    return NOT_CONTAINED_MESSAGE(lettersLeftArray[0])
  }
  return false
}

export const unicodeSplit = (word: string) => {
  return new GraphemeSplitter().splitGraphemes(word)
}

export const unicodeLength = (word: string) => {
  return unicodeSplit(word).length
}

export const localeAwareLowerCase = (text: string) => {
  return process.env.REACT_APP_LOCALE_STRING
    ? text.toLocaleLowerCase(process.env.REACT_APP_LOCALE_STRING)
    : text.toLowerCase()
}

export const localeAwareUpperCase = (text: string) => {
  return process.env.REACT_APP_LOCALE_STRING
    ? text.toLocaleUpperCase(process.env.REACT_APP_LOCALE_STRING)
    : text.toUpperCase()
}

export const getWordOfDay = () => {
  const epochMs = new Date(2022, 0).valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  return {
    solution: localeAwareUpperCase(WORDS[index % WORDS.length]),
    solutionIndex: index,
    tomorrow: nextday,
  }
}
export const getWordInfinity = () => {

  const epochMs = new Date('January 1, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 1
  const index = Math.floor((now - epochMs) / msInDay)
  return {
    solution2: localeAwareUpperCase(WORDS[index % WORDS.length]),
    solutionIndex2: index,
  }
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
export const { solution2, solutionIndex2  } = getWordInfinity()
