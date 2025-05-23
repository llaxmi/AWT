const express = require("express");
const db = require("better-sqlite3")("data.db");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello Laxmi");
});

db.prepare(
  "CREATE TABLE IF NOT EXISTS quotes (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT NOT NULL, author TEXT NOT NULL)"
).run();

app.get("/quotes", (req, res) => {
  const all = db.prepare("SELECT * FROM quotes").all();
  res.json(all);
});

app.post("/quotes", (req, res) => {
  const { text } = req.body;
  const info = db.prepare("INSERT INTO quotes (text) VALUES (?)").run(text);
  res.status(201).json({ id: info.lastInsertRowid, text });
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ message: "User created", user: { name, email } });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// prepare()
// What it does:
// Prepares a SQL statement so that it can be executed later.
// Why it's useful:
// It improves performance and security by parsing and compiling the SQL only once, and it allows safe parameter binding (avoiding SQL injection).

// all()
// What it does:
// Executes a prepared SELECT statement and returns all rows as an array of objects.
//run()
// What it does:
// Executes a prepared SQL statement.

//run()
//Executes a prepared statement that doesn't return any data (used for INSERT, UPDATE, DELETE, and CREATE TABLE, etc.).
//Why you see .run() here:
//db.prepare("CREATE TABLE IF NOT EXISTS quotes (...)").run();
//This creates the table if it doesn't already exist. Since CREATE TABLE doesn’t return rows, we just "run" it.

// app.get("/data", (req, res) => {
//   const sampleData = {
//     users: [
//       {
//         id: 1,
//         name: "John Doe",
//         email: "john@example.com",
//       },
//       {
//         id: 2,
//         name: "Jane Smith",
//         email: "jane@example.com",
//       },
//     ],
//     products: [
//       {
//         id: 1,
//         name: "Laptop",
//         price: 999.99,
//         inStock: true,
//       },
//       {
//         id: 2,
//         name: "Smartphone",
//         price: 499.99,
//         inStock: false,
//       },
//     ],
//   };
//   P;
//   res.status(200).json(sampleData);
// });
