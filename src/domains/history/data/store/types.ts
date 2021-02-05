export type GameRecord = {
  player: string;
  date: Date;
  score: number;
  totalSequences: number;
  level: number;
};

export type History = {
  records: GameRecord[];
};
