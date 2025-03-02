// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://mateusflawer:V6WyRsg8hhsjZ7iA@clustermateusflawer.1tajf.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMateusFlawer";

const client = new MongoClient(URI);

export const db = client.db("spotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
