import GlobalStyle from "../styles";
import initialGames from "@/public/initialGames.js";

export default function App({ Component, pageProps }) {
  console.log(initialGames);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} initialGames={initialGames} />
    </>
  );
}
