import styled from "styled-components";

export default function GameCard({ game }) {
  return (
    <StyledDiv>
      <h4>{game.title}</h4>
      <p>Rating: {game.rating}</p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  border: solid 0.2rem black;
  border-radius: 5px;
  height: 10rem;
  padding: 0.5rem;
  min-width: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
