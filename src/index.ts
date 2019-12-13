import express from "express";
import bodyParser from "body-parser";
import Route from "../routes/Route";

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/", Route);
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.listen(PORT, () => console.log(`Server in ${PORT}`));
