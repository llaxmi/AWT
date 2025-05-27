const prisma = require("./db/prisma");
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://127.0.0.1:5501", //allowing only my frontend
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Route to serve HTML form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/quotes", async (req, res) => {
  try {
    const { author, quote } = req.body;
    const data = await prisma.quotes.create({
      data: {
        author,
        quote,
      },
    });
    res.status(201).json({ message: "Quote created successfully", data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// for bulk insert

// const newQuotes = await prisma.quotes.createMany({
//   data: req.body, // array of quote objects
// });
// res.status(201).json(newQuotes);

app.get("/quotes", async (req, res) => {
  try {
    const quotes = await prisma.quotes.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json(quotes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// async function main() {
//   // await prisma.user.create({
//   //   data: {
//   //     name: "Laxmi",
//   //     email: "pika@gmail.com",
//   //   },
//   // });

//   await prisma.quotes.create({
//     data: {
//       author: "Laxmi Lamichhane",
//       quote: "Life is beautiful. It's good to be alive.",
//     },
//   });

//   console.log("Quote created");
//   console.log("User created");
// }

// main();
