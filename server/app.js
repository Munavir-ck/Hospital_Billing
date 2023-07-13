import express from "express";
import cors from "cors";
import user from "./Routes/user.js";
import dotenv from "dotenv";
import db from "./model/connnection.js";

dotenv.config({ silent: process.env.NODE_ENV === "production" });
const port = process.env.PORT
const app = express();

db(() => {
  console.log(`connection success`);
});

app.listen(port, () => {
  console.log(`server listening at http://127.0.0.1:${port}`);
});
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
  
app.use("/", user);
