import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";

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
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/videos", videoRoutes);

app.listen(8888, () => {
  connect();
  console.log("server connected");
});
