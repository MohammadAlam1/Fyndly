import mongoose from "mongoose";
import "dotenv/config";
const mongoURL = process.env.MONGO_DB_STRING;

/*
connect to mongoDB cluster.
if you add/place your database name inside MONGO_DB_STRING then it also connect to your database.
*/
export const connectToClusterAndDB = async () => {
  await mongoose.connect(mongoURL);
};
