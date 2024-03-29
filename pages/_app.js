import "../styles/globals.css";
import Head from 'next/head';
import { InjectedProviderFC } from "../contexts/InjectedProviderContext";
import { EthersContextFC } from "../contexts/EthersProviderContext";
import { ChakraProvider } from "@chakra-ui/react";
import {Toaster} from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <EthersContextFC>
        <Head>
          <title>based ghouls</title>
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
          <meta name="author" content="0xhanvalen via https://www.raidguild.org/" />
          <meta name="description" content="6666 Based Ghouls Consumed in the destruction of Moonbase Summoned anew with the occult technology of financial power Rise from your grave"/>
        </Head>
        <Component {...pageProps} />
        <Toaster />
      </EthersContextFC>
    </ChakraProvider>
  );
}

export default MyApp;
