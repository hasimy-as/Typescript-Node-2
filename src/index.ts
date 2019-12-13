import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import Route from "../routes/Route";

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/", Route);
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.listen(PORT, () => console.log(`Server in ${PORT}`));
