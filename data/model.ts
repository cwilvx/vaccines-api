import mongoose from "mongoose";

// create a schema
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

export default mongoose.model("Child", childSchema);
