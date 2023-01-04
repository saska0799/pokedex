import "../styles/globals.css";
import Layout from "../components/shared/Layout";
import { PokemonProvider } from "../context/PokemonContext";

export default function App({ Component, pageProps }) {
  return (
    <PokemonProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PokemonProvider>
  );
}
