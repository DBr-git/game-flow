import styled from "styled-components";

export default function SortingSelector({
  onChangeSortingOrder,
  sortingOrder,
}) {
  function handleSortingOrder(event) {
    onChangeSortingOrder(event.target.value);
  }

  return (
    <StyledDiv>
      <select
        name="sortingOrder"
        defaultValue={sortingOrder}
        onChange={handleSortingOrder}
      >
        <option value="alphabetically-A-to-Z">by name: from A - Z</option>
        <option value="alphabetically-Z-to-A">by name: from Z - A</option>
        <option value="byRating-1-to-10">by rating: from 1 - 10</option>
        <option value="byRating-10-to-1">by rating: from 10 - 1</option>
      </select>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  padding: var(--mainContentPadding);
  overflow-wrap: anywhere;
  color: var(--headingColor);
  select {
    padding: 0.5em;
    padding-left: 12px;
    background-color: var(--backgroundSubSection);
    color: var(--headingColor);
    border: none;
    font-family: var(--textFont);
    font-size: 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--boxShadow);
  }
`;
