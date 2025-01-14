import { useRouter } from "next/router";
import styled from "styled-components";
import BackButton from "@/components/buttons/BackButton";

export default function LibraryGameDetails() {
  const router = useRouter();
  return (
    <>
      <StyledDiv>
        <BackButton href="/" />
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  height: 150px;
  margin: -0.5em -1.75em 0 -1.75em;
  display: flex;
  flex-direction: column;
  padding: 0.5em 1.75em;
`;
