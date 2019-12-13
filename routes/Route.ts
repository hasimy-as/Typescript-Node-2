import express, { Router } from "express";
import db from "../database/dbconn";

const Route: Router = express.Router();
const Apps: express.Application = express();

Route.get("/", (req, res) => res.end("hi"));

export default Route;
