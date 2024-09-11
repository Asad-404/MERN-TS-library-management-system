const ROUNDS: number = process.env.ROUNDS
  ? Number(process.env.ROUNDS)
  : Math.floor(Math.random() * 11);

export const appConfig = {
  rounds: ROUNDS,
};
