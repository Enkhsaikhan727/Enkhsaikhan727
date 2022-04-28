import { useState } from "react";

import { sendCreate, isWordInWordList, isWordInWordListCreate } from "../../lib/words";
import { BaseModal } from "./BaseModal";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};
var Word: string = "";
var NewGame: string = "";

const randomGame = () => {
  window.location.href = "/" + NewGame;
};

export const AddWord = ({ isOpen, handleClose }: Props) => {
  const [text, setText] = useState("");

  return (
    <BaseModal title="Үг таалгах" isOpen={isOpen} handleClose={handleClose}>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Та 6 үсгээс бүрдсэн монгол үг оруулж найзуудаараа өөрийн үгийг
          таалгаарай.
        </p>
        <label>
          <input
            className="mt-2 w-full"
            type="text"
            name="input"
            placeholder="Үгээ оруулна уу.."
            value={text}
            onChange={(e) => setText(e.target.value.toUpperCase())}
          />
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={async () => {
              if (!isWordInWordListCreate(text)) {
                setText("үг олдсонгүй");
              } else {
                await sendCreate(text.toUpperCase()).then((result) => {
                  Word = result;
                });
                setText("http://taalda.games/" + Word);
              }
            }}
          >
            Линк авах
          </button>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={async () => {
              await sendCreate("random").then((result) => {
                NewGame = result;
              });
              randomGame();
            }}
          >
            Шинээр Тоглох
          </button>
        </label>
      </div>
    </BaseModal>
  );
};
