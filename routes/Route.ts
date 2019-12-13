import express, { Router, Request, Response } from "express";
import db from "../database/dbconn";

const Route: Router = express.Router();

Route.get("/login", (req, res) => res.render("login"));
Route.get("/register", (req, res) => res.render("register"));

Route.get("/", (req: Request, res: Response) => {
  if (req.session) {
    req.session.loggedin = true;
    res.end("<h1>You've logged in!</h1>");
  } else {
    console.log("Gotta login first!");
    res.redirect("/login");
  }
});

Route.post("/logined", (req: Request, res: Response) => {
  let email = req.body.email,
    password = req.body.password;
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  if (email && password) {
    db.query(sql, [email, password], (err, rows) => {
      if (err) throw err;
      if (rows.length > 0) {
        if (req.session) {
          req.session.loggedin = true;
          req.session.email = email;
          res.redirect("/");
        }
      } else {
        console.log("Data is incorrect");
        res.redirect("/login");
      }
      res.end();
    });
  }
});

Route.post("/registered", (req: Request, res: Response) => {
  let dataRegister = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };
  db.query("INSERT INTO users SET ?", dataRegister, (err, rows) => {
    if (err) throw err;
    console.log("Data inserted with results of", rows);
    res.redirect("/login");
  });
});

export default Route;
