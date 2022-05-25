/* istanbul ignore file */
<<<<<<< HEAD
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import defaultTheme from "./themes/default";
import { Provider } from "react-redux";
import store from "./config/redux";
import apClient from "./config/apollo";

const noCacheApolloConfig = {
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
};

export const AllProviders = ({ children }) => (
  <ApolloProvider client={apClient(noCacheApolloConfig)}>
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </ThemeProvider>
  </ApolloProvider>
=======
import { ThemeProvider } from "@emotion/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import defaultTheme from "./layouts/themes/default";

export const AllProviders = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>{children}</BrowserRouter>
  </ThemeProvider>
>>>>>>> d193a2d53e810fa461db9f876c1eccbb90e7cf54
);
