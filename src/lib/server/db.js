import { MongoClient, ObjectId } from "mongodb";
import { env } from "$env/dynamic/private";

if (!env.DB_URI) {
  throw new Error("DB_URI is missing");
}

const client = new MongoClient(env.DB_URI);
let db;

export async function getDb() {
  if (!db) {
    await client.connect();
    db = client.db("ScreenStackDB");
  }
  return db;
}

export async function getMovies() {
  const db = await getDb();
  return await db.collection("movies").find({}).toArray();
}

export async function getMovie(id) {
  const db = await getDb();
  return await db.collection("movies").findOne({
    _id: new ObjectId(id)
  });
}

export async function createMovie(movie) {
  const db = await getDb();

  movie.actors = [];
  movie.watchlist = false;

  if (!movie.poster || movie.poster.trim() === "") {
    movie.poster = "/images/placeholder.jpg";
  }

  await db.collection("movies").insertOne(movie);
}