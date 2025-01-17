export function sortedGamesByAlphabet(filteredGames, order) {
  const sortedGames = filteredGames.toSorted((a, b) =>
    order === "descending"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );
  return sortedGames;
}

export function sortedGamesByRating(filteredGames, order) {
  const sortedGames = filteredGames.toSorted((a, b) =>
    order === "descending"
      ? Number(b.rating) - Number(a.rating)
      : Number(a.rating) - Number(b.rating)
  );
  return sortedGames;
}
