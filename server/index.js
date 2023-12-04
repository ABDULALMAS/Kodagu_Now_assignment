import express from "express";

import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/Task.js";
import userRoutes from "./routes/users.js";

import dotenv from "dotenv";


const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/task", taskRoutes);
app.use("/users", userRoutes);
const PORT = process.env.PORT || 5000;

app.get("/", (req,res) => {
  res.send("Server is running !")
})

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));