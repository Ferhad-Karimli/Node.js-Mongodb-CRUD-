import express from "express";
import { Contact } from "../models/contact.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const contact = await Contact.find();
    res.status(200).send(contact);
  } catch (error) {
    error.status(500).send({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await new Contact(req.body);
    const contact = await data.save();
    res.status(201).send(contact);
  } catch (error) {
    error.status(500).send({ error: error.message });
  }
});

export { router };
