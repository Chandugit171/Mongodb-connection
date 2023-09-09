// const { MongoClient } = require("mongodb");

// // Connection URI
// const uri = "mongodb://localhost:27017/dbconnect";

// // Create a new MongoClient
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Connect to MongoDB
// async function connectToMongo() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB done");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// // Call the connection function
// connectToMongo();
// --------------------------
// Data storing in the data base of dbconnection
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/details";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Database and collection name
    const dbName = "Userdata";
    const collectionName = "details";

    // Get a reference to the database
    const db = client.db(dbName);

    // Sample data to insert
    const sampleData = [
      { name: "John", age: 30 },
      { name: "Alice", age: 25 },
      { name: "Bob", age: 35 },
    ];

    // Insert the sample data into the collection
    const result = await db.collection(collectionName).insertMany(sampleData);

    console.log(`${result.insertedCount} documents inserted`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Close the MongoDB connection when done
    client.close();
  }
}

connectToMongo();
