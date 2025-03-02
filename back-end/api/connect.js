import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://mateusflawer:V6WyRsg8hhsjZ7iA@clustermateusflawer.1tajf.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMateusFlawer";

const client = new MongoClient(URI);

const db = client.db("spotify");

export default db;
