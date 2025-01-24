import { StyledMenuLink } from "./StyledMenuLink";
import LibrarySvg from "@/public/library.svg";

export default function LibraryButton({ onSetScrollPosition }) {
  return (
    <StyledMenuLink
      href="/library"
      aria-label="view library"
      onClick={() => onSetScrollPosition(0)}
    >
      <LibrarySvg />
      <p>Library</p>
    </StyledMenuLink>
  );
}
