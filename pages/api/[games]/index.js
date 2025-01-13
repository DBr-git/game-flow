const CLIENT_ID = process.env.CLIENT_ID;
const API_KEY = process.env.API_KEY;

export default async function handler(request, response) {
  console.log("Incoming request:", request.method);
  if (request.method === "GET") {
    try {
      const { games: offset } = request.query;

      const fetchedGames = await fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Client-ID": CLIENT_ID,
          Authorization: `Bearer ${API_KEY}`,
        },
        body: `fields name; limit 20; offset ${offset}; sort total_rating desc; where version_parent = null & cover != null & themes != (42);`,
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
