import express, { Router } from "express";
import db from "../database/dbconn";

const Route: Router = express.Router();

Route.get("/", (req, res) => res.end("hi"));

export default Route;
