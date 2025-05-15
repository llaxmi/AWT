const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello Laxmi");
});

app.get("/api/data", (req, res) => {
  const sampleData = {
    users: [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
      },
    ],
    products: [
      {
        id: 1,
        name: "Laptop",
        price: 999.99,
        inStock: true,
      },
      {
        id: 2,
        name: "Smartphone",
        price: 499.99,
        inStock: false,
      },
    ],
  };

  res.status(200).json(sampleData);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ message: "User created", user: { name, email } });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
