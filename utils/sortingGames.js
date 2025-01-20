export function sortedGamesByAlphabet(filteredGames, order) {
  const sortedGames = filteredGames.toSorted((a, b) =>
    order === "descending" && order !== ""
      ? b.name.localeCompare(a.name)
      : a.name.localeCompare(b.name)
  );
  return sortedGames;
}

export function sortedGamesByRating(filteredGames, order) {
  const sortedGames = filteredGames.toSorted((a, b) =>
    order === "descending" && order !== ""
      ? Number(b.rating) - Number(a.rating)
      : Number(a.rating) - Number(b.rating)
  );
  return sortedGames;
}
