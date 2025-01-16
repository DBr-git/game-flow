const CLIENT_ID = process.env.CLIENT_ID;
const API_KEY = process.env.API_KEY;

export default async function handler(request, response) {
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
        body: `fields name, summary, cover.image_id, cover.width, cover.height; 
        limit 50; 
        offset ${(offset - 1) * 50}; 
        sort total_rating desc; where parent_game = null & cover != null & themes != (42) & artworks !=null & category = 0;`,
      });

      if (!fetchedGames.ok) {
        throw new Error(`Error: ${fetchedGames.statusText}`);
      }

      const gamesData = await fetchedGames.json();

      return response.status(200).json(gamesData);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
  if (request.method === "POST") {
    try {
      const searchedGames = await fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Client-ID": CLIENT_ID,
          Authorization: `Bearer ${API_KEY}`,
        },
        body: `fields name, summary, cover.image_id, cover.width, cover.height; 
        limit 50; 
        where version_parent = null & cover != null & artworks != null & themes != (42) & category = 0; & name ~ *"${request.body}"*`,
      });

      if (!searchedGames.ok) {
        throw new Error(`Error: ${searchedGames.statusText}`);
      }

      const searchData = await searchedGames.json();

      return response.status(200).json(searchData);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ status: "Method not allowed." });
  }
}
