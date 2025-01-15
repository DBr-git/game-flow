import { StyledMenuLink } from "./StyledMenuLink";
import ListSvg from "@/public/list.svg";

export default function PersonalListButton() {
  return (
    <StyledMenuLink href="/" aria-label="view personal list">
      <ListSvg />
      <p>Your List</p>
    </StyledMenuLink>
  );
}
