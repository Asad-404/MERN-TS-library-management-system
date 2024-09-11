const MONGO_USERNAME: string = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || "";

const MONGO_URL: string = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:27017/librarydb`;

export const dbConfig = {
  url: MONGO_URL,
};
