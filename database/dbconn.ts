import mysql from "mysql";

const db = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "",
  database: "ts_node2"
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to database");
});

export default db;
