import GlobalStyle from "../styles";
import initialGames from "@/public/initialGames.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} initialGames={initialGames} />
    </>
  );
}
