export type GameRecord = {
  player: string; // TODO: replace with player entity
  date: Date;
  score: number;
  totalSequences: number;
  level: number;
};

export type History = {
  records: GameRecord[];
};
