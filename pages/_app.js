import "../styles/globals.css";
import { InjectedProviderFC } from "../contexts/InjectedProviderContext";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <InjectedProviderFC>
        <Component {...pageProps} />
      </InjectedProviderFC>
    </ChakraProvider>
  );
}

export default MyApp;
