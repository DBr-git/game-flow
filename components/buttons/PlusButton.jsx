import { StyledMenuLink } from "./StyledMenuLink";
import PlusSvg from "../PlusSvg";

export default function PlusButton() {
  return (
    <StyledMenuLink href="/add-game" aria-label="add game">
      <PlusSvg width="50" height="50" />
      <p>Add Game</p>
    </StyledMenuLink>
  );
}
