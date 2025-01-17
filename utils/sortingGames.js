export function sortedGamesByAlphabet(filteredGames, order) {
  const sortedGames = filteredGames.toSorted(
    (a, b) =>
      order === "descending" && order !== ""
        ? b.name.localeCompare(a.name)
        : a.name.localeCompare(b.name)
    // {
    //   if (order === "descending") {
    //     return b.name.localeCompare(a.name);
    //   } else if (order === "ascending") {
    //     return a.name.localeCompare(b.name);
    //   } else {
    //     return null;
    //   }
    // }
  );
  return sortedGames;
}

export function sortedGamesByRating(filteredGames, order) {
  const sortedGames = filteredGames.toSorted(
    (a, b) =>
      order === "descending" && order !== ""
        ? Number(b.rating) - Number(a.rating)
        : Number(a.rating) - Number(b.rating)
    // {
    //   if (order === "descending") {
    //     return Number(b.rating) - Number(a.rating);
    //   } else if (order === "ascending") {
    //     return Number(a.rating) - Number(b.rating);
    //   } else {
    //     return null;
    //   }
    // }
  );
  return sortedGames;
}
