import express from "express";
import Route from "../routes/Route";

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/", Route);

app.listen(PORT, () => console.log(`Server in ${PORT}`));
