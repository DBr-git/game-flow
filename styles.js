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
    padding: 1em;
    font-family: var(--titleFont);
    
    color: var(--secondaryColor1);
    background-color: var(--primaryColor1);
  }

  p{
    font-family: var(--textFont);
    font-size: 1rem;
    color: var(--secondaryColor1);
  }

  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.75em;
  }
  h3 {
    font-size: 1.2em;
  }
  h4 {
    font-size: 1em;
  }
  
`;
