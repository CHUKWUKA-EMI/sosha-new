import "../styles/globals.css";
import React, { useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { store } from "../state/store";
import { Provider } from "react-redux";
import { useApollo } from "../Apollo/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-popper-tooltip/dist/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  useEffect(() => {
    const theme = localStorage.getItem("sosha.theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Sosha</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>

      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <Component {...pageProps} />
          {typeof window !== undefined && (
            <ToastContainer autoClose={3000} position="top-right" />
          )}
        </Provider>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default MyApp;
