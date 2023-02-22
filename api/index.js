"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var faker_1 = require("@faker-js/faker");
var app = (0, express_1["default"])();
// Define a route that serves vaccine data
app.get("/vaccines", function (req, res) {
    var vaccines = [];
    // Generate fake vaccine data using Faker.js
    for (var i = 0; i < 10; i++) {
        var vaccine = {
            name: faker_1.faker.lorem.words(),
            administeringAge: parseInt(faker_1.faker.random.numeric(1, {
                bannedDigits: "0"
            })),
            description: faker_1.faker.lorem.sentence(),
            availability: true,
            otherInfo: faker_1.faker.lorem.paragraph()
        };
        vaccines.push(vaccine);
    }
    // Send the generated vaccine data as a JSON response
    res.json({ vaccines: vaccines });
});
// define route to serve a list of location strings
app.get("/locations", function (req, res) {
    var locations = [];
    // Generate fake location data using Faker.js
    for (var i = 0; i < 10000; i++) {
        var location_1 = {
            name: faker_1.faker.address.city(),
            address: faker_1.faker.address.streetAddress(),
            zipCode: faker_1.faker.address.zipCode(),
            state: faker_1.faker.address.state(),
            country: faker_1.faker.address.country()
        };
        locations.push(location_1);
    }
    // Send the generated location data as a JSON response
    res.json({ locations: locations });
});
// Start the server
var port = 3000;
app.listen(port, function () {
    console.log("Server listening on port ".concat(port));
});
