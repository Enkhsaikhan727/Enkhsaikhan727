import { GameStats } from "../../lib/localStorage";

type Props = {
  gameStats: GameStats;
};

export const Histogram = ({ gameStats }: Props) => {
  return (
    <div className="columns-1 justify-left m-2 text-sm dark:text-white"></div>
  );
};
