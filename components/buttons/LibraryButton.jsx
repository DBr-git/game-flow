import { StyledMenuLink } from "./StyledMenuLink";
import LibrarySvg from "@/public/library.svg";

export default function LibraryButton() {
  return (
    <StyledMenuLink href="/library" aria-label="view library">
      <LibrarySvg />
      <p>Library</p>
    </StyledMenuLink>
  );
}
