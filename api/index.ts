import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";

import vaccines from "../data/vaccines";
import { Child, validateChild } from "../interfaces";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// `mongodb+srv://dummy:@cluster0.vte2d.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(
  `mongodb+srv://dummy:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.tlj13e2.mongodb.net/?retryWrites=true&w=majority`
);

const childSchema = new mongoose.Schema({
  child_name: {
    type: String,
    unique: true,
  },
  guardian_name: String,
  guardian_phone: String,
  age: String,
  location: String,
  gender: String,
});

const MongoChild = mongoose.model("Child", childSchema);


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
  res.send({ vaccines });
});

app.get("/api/child", (req, res) => {
  res.send({ message: "Child ID is required" });
});

// add child ✅
app.post("/api/child", async (req, res) => {
  const child_ = req.body as Child;

  if (!validateChild(child_)) {
    res.status(400).send({ message: "Invalid child schema" });
    return;
  }

  const child = new MongoChild(child_);

  try {
    await child.save();
    res.send(child);
  } catch (error) {
    res.send({
      error:
        error.code === 11000
          ? `Failed! child with name '${child.child_name}' has already been recorded.`
          : "That child can't be saved 😸",
    });
  }
});

// get child by id ✅
app.get("/api/child/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const child = await MongoChild.findById(id);
    res.send(child);
  } catch (error) {
    res.send({ data: null });
  }
});

// get all children ✅
app.get("/api/children", async (req, res) => {
  try {
    const children = await MongoChild.find();
    res.send(children);
  } catch (error) {
    res.send({ error: "Could not fetch children data!" });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on  http://localhost:${port}`);
});
