export function sortedGamesByAlphabet(filteredGames) {
  const sortedGames = filteredGames.toSorted((a, b) =>
    a.name.localeCompare(b.name)
  );
  return sortedGames;
}

export function sortedGamesByRating(filteredGames) {
  const sortedGames = filteredGames.toSorted(
    (a, b) => Number(a.rating) - Number(b.rating)
  );
  return sortedGames;
}
