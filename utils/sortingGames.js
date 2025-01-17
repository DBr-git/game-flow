export default function sortGames({ filteredGames, firstItem, secondItem }) {
  const filteredAlphabetically = filteredGames.sort(
    (a, b) => firstItem.name - secondItem.name
  );
  return filteredAlphabetically;
}

export function sortGamesAscending({ filteredGames }) {
  const filteredAlphabetically = filteredGames.sort((a, b) => b.name - a.name);
  return filteredAlphabetically;
}
