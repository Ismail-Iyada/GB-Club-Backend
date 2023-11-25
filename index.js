import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactMeRouter from "./routes/contactMe.route.js";
import cors from "cors"
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });


const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.listen(1000, () => {
  console.log("server is running on port 1000");
});

app.use("/api/form", contactMeRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
