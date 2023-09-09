const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017/dbconnect";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to MongoDB
async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB done");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Call the connection function
connectToMongo();
