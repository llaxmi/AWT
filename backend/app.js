const prisma = require("./db/prisma");
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/quotes", async (req, res) => {
  try {
    const { author, quote } = req.body;

    if (!author || !quote) {
      return res.status(400).json({ error: "Author and quote are required" });
    }

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
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(quotes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch quotes" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
