import db from "$lib/server/db.js";

export async function load() {
  const movies = await db.getMovies();

  return {
    movies: movies.map((movie) => ({
      ...movie,
      _id: movie._id.toString()
    }))
  };
}