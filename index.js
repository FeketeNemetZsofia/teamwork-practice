import express from "express";
import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

const port = 3000


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/index.html"))
})

app.use("/public", express.static(path.join(__dirname, "/frontend/public"))
)


app.listen(port, () => {
    console.log(`Open this link in your browser: http://127.0.0.1:3000`);
  })