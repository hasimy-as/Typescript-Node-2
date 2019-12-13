import express, { Router } from "express";

const Route: Router = express.Router();

Route.get("/", (req, res) => res.end("hi"));

export default Route;
