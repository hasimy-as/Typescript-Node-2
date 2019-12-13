import express, { Router, Request, Response } from "express";
import db from "../database/dbconn";

const Route: Router = express.Router();

Route.get("/login", (req, res) => res.render("login"));
Route.get("/register", (req, res) => res.render("register"));

Route.get("/", (req: Request, res: Response) => {
  if (req!.session!.loggedin) {
    res.render("home");
  } else {
    res.redirect("/login");
  }
});

Route.post("/auth", (req: Request, res: Response) => {
  let email = req.body.email;
  let password = req.body.password;
  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  if (email && password) {
    db.query(sql, [email, password], (err, rows) => {
      if (err) throw err;
      if (rows.length > 0) {
        req!.session!.loggedin = true;
        req!.session!.email = email;
        res.redirect("/");
      } else {
        console.log("Data is incorrect");
        res.redirect("/login");
      }
      res.end();
    });
  }
});

export default Route;
