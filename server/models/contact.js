import mongoose, { Schema } from "mongoose";

const contachSchema = Schema({
  name: String,
  sername: String,
  phone: Number,
  birthdayPlace: String,
  maritalStatus: String,
});

const Contact = mongoose.model("Contact", contachSchema);
export { Contact };
