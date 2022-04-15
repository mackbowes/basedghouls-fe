import "../styles/globals.css";
import { InjectedProviderFC } from "../contexts/InjectedProviderContext";

function MyApp({ Component, pageProps }) {
  return (
      <InjectedProviderFC>
        <Component {...pageProps} />
      </InjectedProviderFC>
  );
}

export default MyApp;
