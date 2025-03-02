import axios from "axios";
import "dotenv/config";

const { NODE_ENV } = process.env;
const URL = NODE_ENV === "development" ? "http://localhost:3001" : "/api";

const artistsArray = await axios
  .get(`${URL}/api/artists`)
  .then((res) => res.data);
const songsArray = await axios.get(`${URL}/api/songs`).then((res) => res.data);

export { artistsArray, songsArray };
