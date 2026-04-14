import db from "$lib/db.js";
import { error } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

export async function load({ params }) {
  if (!ObjectId.isValid(params.id)) {
    throw error(404, "Ungültige Film-ID");
  }

  const movie = await db.getMovie(params.id);

  if (!movie) {
    throw error(404, "Film nicht gefunden");
  }

  return {
    movie: {
      ...movie,
      _id: movie._id.toString()
    }
  };
}