const express = require("express");
const dotenv = require("dotenv")
const { Collection, MongoClient } = require("mongodb");
const bodyParser = require('body-parser')
const cors = require('cors'); // Add this line

dotenv.config();

const app = express();
const port = 3000;

// MongoDB setup
const url = "mongodb://localhost:27017";
const dbName = "PassOp";
const client = new MongoClient(url);

// Add CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  'Access-Control-Allow-Origin': '*',
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json())

//init
client.connect()

//get
app.get("/", async (req, res) => {
  const db = client.db(dbName)
  const collection = db.collection('douments')
  const findres = await collection.find({}).toArray();
  res.json(findres);
});

//save


app.post("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("douments");

  const newEntry = req.body;

  try {
    // insertion here 
    await collection.insertOne(newEntry);
    res.status(201).send({ message: "Data saved successfully", data: newEntry });
  } catch (error) {
    res.status(500).send({ message: "Failed to save data", error: error.message });
  }
});

//delet
app.delete("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("douments");

  const newEntry = req.body;

  try {
    // insertion here 
    await collection.deleteOne(newEntry);
    res.status(201).send({ message: "Data deleted successfully", data: newEntry });
  } catch (error) {
    res.status(500).send({ message: "Failed to deleted data", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Your web is on http://localhost:${port}`);
});