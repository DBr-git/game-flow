export default function SortingSelector({ setSortingOrder }) {
  function handleSortingOrder(event) {
    setSortingOrder(event.target.value);
  }

  return (
    <>
      <select
        name="sortingOrder"
        defaultValue="alphabetically"
        onChange={handleSortingOrder}
      >
        <option value="byRating">sort by rating</option>
        <option value="alphabetically">sort alphabetically</option>
      </select>
    </>
  );
}
