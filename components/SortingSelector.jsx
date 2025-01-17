import styled from "styled-components";
import arrowDown01 from "@/public/sortingMenu/arrow-down-0-1.svg";

export default function SortingSelector({ setSortingOrder }) {
  function handleSortingOrder(event) {
    setSortingOrder(event.target.value);
  }

  return (
    <StyledDiv>
      <select
        name="sortingOrder"
        defaultValue="alphabetically"
        onChange={handleSortingOrder}
      >
        <option value="alphabetically-ascending">sort by rating</option>
        <option value="alphabetically-descending">sort alphabetically</option>
        <option value="byRating-ascending">test</option>
        <option value="byRating-descending">test</option>
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
