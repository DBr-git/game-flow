import { createGlobalStyle } from "styled-components";
import { Roboto, Proza_Libre } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700", "400", "300"],
});

export const prozaLibre = Proza_Libre({
  subsets: ["latin"],
  weight: ["400"],
});

export default createGlobalStyle`

:root {
  --primaryBackground: #0B1622;
  --backgroundSubSection: #151F2E;
  --primaryBackground2: #11161D;
  --headingColor: #9FADBD;
  --subHeadingColor: #EDF1F5;
  --subHeadingHighlight: #D3D5F3;
  --alertColor: #DA4127;
  --alertHighlight: #F57885;
  --menuColor: #00AAFF;

  --titleFont: ${roboto.style.fontFamily};
  --textFont: ${prozaLibre.style.fontFamily};

  --borderRadius: 5px;
  --boxShadow: 1px 1px 0.2em 0.1px black;

  --mainContentPadding: 0.75em;
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
    color: var(--headingColor);
    background-color: var(--primaryBackground);

    @media screen and (min-width: 1024px){
      margin-top: 88px;      
    }
  }

  h1 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }
  h2 {
    font-size: 1.15em;
    margin-top: 1em; 
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
    color: var(--headingColor)
    
  }
`;
