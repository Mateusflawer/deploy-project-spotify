// Fetch ou Axios
import axios from "axios";

// const { NODE_ENV } = process.env;
// const URL = "http://localhost:3001/api";
const URL = "https://deploy-spotify-project-uhzq.onrender.com/api";

const artistsArray = await axios.get(`${URL}/artists`).then((res) => res.data);
const songsArray = await axios.get(`${URL}/songs`).then((res) => res.data);

export { artistsArray, songsArray };
// console.log(responseArtists.data);
