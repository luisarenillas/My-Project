import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);
await client.connect();

const db = client.db("ScreenStackDB");

async function getMovies() {
  return await db.collection("movies").find({}).toArray();
}

async function getMovie(id) {
  return await db.collection("movies").findOne({
    _id: new ObjectId(id)
  });
}

async function createMovie(movie) {
  movie.actors = [];
  movie.watchlist = false;

  if (!movie.poster || movie.poster.trim() === "") {
    movie.poster = "/images/placeholder.jpg";
  }

  await db.collection("movies").insertOne(movie);
}

export default {
  getMovies,
  getMovie,
  createMovie
};