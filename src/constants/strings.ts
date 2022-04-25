export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!;
export const WIN_MESSAGES = ["Онц", "Гайхалтай", "Сайн байна!"];
export const GAME_COPIED_MESSAGE = "Тоглолтын үр дүнг хуулсан";
export const NOT_ENOUGH_LETTERS_MESSAGE = "Үсгийн тоо хангалтгүй байна";
export const WORD_NOT_FOUND_MESSAGE = "Үг олдсонгүй";
export const HARD_MODE_ALERT_MESSAGE =
  '"Хэцүү Горим"-г зөвхөн тоглоом эхэлхэд идэвхжүүлэх боломжтой';
export const CORRECT_WORD_MESSAGE = (solution: string) => `Зөв үг ${solution}`;
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `${position} байрлалд ${guess} үсэг ашиглах ёстой`;
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `"${letter} үсэг" агуулагдсан байх ёстой`;
export const ENTER_TEXT = "Шалгах";
export const DELETE_TEXT = "Арилгах";
export const STATISTICS_TITLE = "Үзүүлэлт";
export const NEW_WORD_TEXT = "Дараагийн шинэ үг хүртэл";
export const SHARE_TEXT = "Хуваалцах";
export const TOTAL_TRIES_TEXT = "Нийт оролдлого";
export const SUCCESS_RATE_TEXT = "Амжилтын түвшин";
export const CURRENT_STREAK_TEXT = "Тааж чадаагүй";
export const BEST_STREAK_TEXT = "Тааж чадсан";
