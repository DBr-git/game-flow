import { StyledMenuLink } from "./StyledMenuLink";
import ListSvg from "@/public/list.svg";

export default function PersonalListButton({ onSetScrollPosition }) {
  return (
    <StyledMenuLink
      href="/"
      aria-label="view personal list"
      onClick={() => onSetScrollPosition(0)}
    >
      <ListSvg />
      <p>Your List</p>
    </StyledMenuLink>
  );
}
