import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";

app.use("/api/users", userRoutes);
const app = express();
dotenv.config();
const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      throw err;
    });
};
app.listen(8888, () => {
  connect();
  console.log("server connected");
});
