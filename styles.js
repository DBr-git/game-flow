import { createGlobalStyle } from "styled-components";
import { Roboto, Proza_Libre } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700", "400"],
});

export const prozaLibre = Proza_Libre({
  subsets: ["latin"],
  weight: ["400"],
});

export default createGlobalStyle`

:root {
  --primaryColor1: #0B1622;
  --primaryColor2: #151F2E;
  --primaryColor3: #11161D;
  --secondaryColor1: #9FADBD;
  --secondaryColor2: #D3D5F3;
  --secondaryColor3: #EDF1F5;
  --accentColor1: #DA4127;
  --accentColor2: #F57885;
  --accentColor3: #00AAFF;

  --titleFont: ${roboto.style.fontFamily};
  --textFont: ${prozaLibre.style.fontFamily};
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    padding: 0.5em 1.75em;
    font-family: var(--titleFont);
    color: var(--secondaryColor1);
    background-color: var(--primaryColor1);
    border-radius: 5px;
  }

  h1 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }
  h2 {
    font-size: 1.15em;
  }
  h3 {
    font-size: 1em;
  }
  

  p{
    font-family: var(--textFont);
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--secondaryColor1)
  }
`;
