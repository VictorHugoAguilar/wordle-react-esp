import { WORD_ES } from "./words";

function getWords() {
  return WORD_ES;
}

export function getWordOfTheDay() {
  const words = getWords();
 // const wordOfTheDay = words[getDayOfTheYear()];
  const wordOfTheDay = words[ randomNumber(0, words.length) ];
 // console.log(wordOfTheDay);
  return wordOfTheDay.toUpperCase();
}

export async function isValidWord(word: string) {
  try {
    /*
    const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
    const response = await fetch(URL);
    if (response.status !== 200) throw new Error("Request Failed");
    const json = await response.json();

    return json.length;
    */
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }

  /* const words = getWords();
  return words.includes(word.toLowerCase()); */
}

function getDayOfTheYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    (now as any) -
    (start as any) +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function randomNumber(min: number, max: number){
  const r = Math.random()*(max-min) + min
  return Math.floor(r)
}