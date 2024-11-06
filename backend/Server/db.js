import mongoose from "mongoose";

export default async function connectDb() {
  mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.jtyxt.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0"
  );

  return mongoose.connection;
}
