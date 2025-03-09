import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || "");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.log("DB接続に失敗しました");
    throw new Error();
  }
};
