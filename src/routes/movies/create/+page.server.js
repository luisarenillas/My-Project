import db from "$lib/server/db.js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const title = formData.get("title")?.toString().trim();
    const year = formData.get("year")?.toString().trim();
    const length = formData.get("length")?.toString().trim();
    const poster = formData.get("poster")?.toString().trim();

    if (!title || !year || !length) {
      return fail(400, {
        error: "Bitte Titel, Jahr und Dauer ausfüllen.",
        values: { title, year, length, poster }
      });
    }

    await db.createMovie({
      title,
      year: Number(year),
      length,
      poster
    });

    throw redirect(303, "/movies");
  }
};