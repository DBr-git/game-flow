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
    margin: 0;
    font-family: var(--titleFont);
    color: var(--ssecondaryColor1);
    background-color: var(--pprimaryColor1);
  }

  
`;
