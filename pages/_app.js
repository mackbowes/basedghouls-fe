import "../styles/globals.css";
import Head from 'next/head';
import { InjectedProviderFC } from "../contexts/InjectedProviderContext";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <InjectedProviderFC>
        <Head>
          <title>based ghouls</title>
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </InjectedProviderFC>
    </ChakraProvider>
  );
}

export default MyApp;
