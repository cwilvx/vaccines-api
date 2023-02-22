import express from "express";
import { faker } from "@faker-js/faker";

import locations from "../data/locations";

const app = express();

// Define a route that serves vaccine data
app.get("/vaccines", (req, res) => {
  const vaccines: any[] = [];

  // Generate fake vaccine data using Faker.js
  for (let i = 0; i < 10; i++) {
    const vaccine = {
      name: faker.lorem.words(),
      administeringAge: parseInt(
        faker.random.numeric(1, {
          bannedDigits: "0",
        })
      ),
      description: faker.lorem.sentence(),
      availability: i % (Math.round(new Date().getHours() / 2) + 1) === 0, // true or false if i is multiple of current hour with a twist
      full_description: faker.lorem.paragraph(),
    };

    vaccines.push(vaccine);
  }

  // Send the generated vaccine data as a JSON response
  res.send({ vaccines });
});

// define route to serve a list of location strings
app.get("/locations", (req, res) => {
  res.send({ locations });
});

// define route that returns all api routes
app.get("/index", (req, res) => {
  res.send({
    vaccines: "/vaccines",
    locations: "/locations",
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on  http://localhost:${port}`);
});
