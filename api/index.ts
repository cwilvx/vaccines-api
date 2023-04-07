import bodyParser from "body-parser";
import express from "express";

import vaccines from "../data/vaccines";
import { Child, validateChild } from "../interfaces";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let db: Child[] = [];

const test_child = {
  id: 1,
  child_name: "Kimata",
  guardian_name: "WaKimata",
  guardian_phone: "88899",
  age: "At 10 weeks",
  location: "Turkana",
  gender: "female",
};

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
        route: "/api/child/test",
        description: "Get a test child",
        methods: ["GET"],
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

// get all children
app.get("/api/child", (req, res) => {
  res.send({ message: "Child ID is required" });
});

// add child
app.post("/api/child", (req, res) => {
  const child = req.body as Child;
  child.id = db.length + 1;

  // check if child is of type Child
  if (!validateChild(child)) {
    res.status(400).send({ message: "Invalid child schema" });
    return;
  }

  // if child name exists, return error
  const childExists = db.find((c) => c.child_name === child.child_name);
  if (childExists) {
    res
      .status(400)
      .send({ message: "Not added! This child is already registered" });
    return;
  }

  db.push(child);
  res.send({ child });
});

// get child by id
app.get("/api/child/:id", (req, res) => {
  const id = req.params.id;

  // if id is "test", return test child
  if (id === "test") {
    res.send({ child: test_child });
    return;
  }

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
