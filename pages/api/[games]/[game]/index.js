const CLIENT_ID = process.env.CLIENT_ID;
const API_KEY = process.env.API_KEY;

export default async function handler(request, response) {
  if (request.method === "GET") {
    try {
      const { game: id } = request.query;

      const fetchedGames = await fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Client-ID": CLIENT_ID,
          Authorization: `Bearer ${API_KEY}`,
        },
        body: `fields name, summary, artworks.image_id, artworks.height, artworks.width; where id=${id};`,
      });

      if (!fetchedGames.ok) {
        throw new Error(`Error: ${fetchedGames.statusText}`);
      }

      const gamesData = await fetchedGames.json();

      return response.status(200).json(gamesData);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ status: "Method not allowed." });
  }
}
