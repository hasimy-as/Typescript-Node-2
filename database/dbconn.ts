import mysql from "mysql";

const db = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "",
  database: "tatib_siswa"
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to database");
});

export default db;
