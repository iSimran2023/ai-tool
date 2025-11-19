import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()
const app = express()
const port = process.env.PORT || 4001;
const MONGO_URL=process.env.MONGO_URI;

mongoose.connect(MONGO_URL).then(()=>console.log("Connected to MongoDB")).catch((error)=>console.error("MongoDB Connection Error: ", error))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
