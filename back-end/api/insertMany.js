import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import db from "./connect.js";

// console.log(
//   await db.collection("artists").insertMany(
//     artistArray.map((currentArtistObj) => {
//       delete currentArtistObj.id;
//       return currentArtistObj;
//     })
//   )
// );
