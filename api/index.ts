import express from "express";
import bodyParser from "body-parser";

import vaccines from "../data/vaccines";
import { Child } from "../interfaces";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let db: Child[] = [];

app.get("/api", (req, res) => {
  res.send({
    routes: [
      {
        route: "/api/vaccines",
        description: "Get all vaccines",
        methods: ["GET"],
      },
      {
        route: "/api/child",
        description: "Add a single child",
        methods: ["POST"],
      },
      {
        route: "/api/child/:id",
        description: "Get a single child by id",
        methods: ["GET"],
      },
      {
        route: "/api/children",
        description: "Get all children",
        methods: ["GET"],
      },
    ],
  });
});

// vaccine data
app.get("/api/vaccines", (req, res) => {
  // Generate fake vaccine data using Faker.js

  // Send the generated vaccine data as a JSON response
  res.send({ vaccines });
});

// add child
app.post("/api/child", (req, res) => {
  console.log(req.body);

  const child = req.body as Child;
  child.id = db.length + 1;

  db.push(child);
  res.send({ message: "Child added successfully" });
});

// get child by id
app.get("/api/child/:id", (req, res) => {
  const id = req.params.id;
  const child = db.find((child) => child.id === parseInt(id));

  res.send({ child: child ? child : null });
});

// get all children
app.get("/api/children", (req, res) => {
  res.send({ children: db });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on  http://localhost:${port}`);
});
