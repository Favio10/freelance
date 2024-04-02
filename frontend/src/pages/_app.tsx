import { type AppType } from "next/dist/shared/lib/utils";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
};

export default MyApp;
