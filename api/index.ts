import express from "express";
import { faker } from "@faker-js/faker";

const app = express();

// Define a route that serves vaccine data
app.get("/vaccines", (req, res) => {
  const vaccines = [];

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
      availability: true,
      otherInfo: faker.lorem.paragraph(),
    };

    vaccines.push(vaccine);
  }

  // Send the generated vaccine data as a JSON response
  res.json({ vaccines });
});

// define route to serve a list of location strings
app.get("/locations", (req, res) => {
  const locations = [];

  // Generate fake location data using Faker.js
  for (let i = 0; i < 10000; i++) {
    const location = {
      name: faker.address.city(),
      address: faker.address.streetAddress(),
      zipCode: faker.address.zipCode(),
      state: faker.address.state(),
      country: faker.address.country(),
    };

    locations.push(location);
  }

  // Send the generated location data as a JSON response
  res.json({ locations });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
