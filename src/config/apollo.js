/* istanbul ignore file */
import { ApolloClient, HttpLink, from, InMemoryCache } from "@apollo/client";
import { setContext } from "apollo-link-context";
import store from "../config/redux";
import env, { isDev } from "./env";

// Set the header based on a fresh token
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      ...(store.getState().user.user && {
        Authorization: `Bearer ${store.getState().user.user.accessToken}`,
      }),
    },
  };
});

const apClient = (config) =>
  new ApolloClient({
    ...config,
    link: from([
      authLink,
      new HttpLink({ uri: `${env.API_ENDPOINT}/graphql` }),
    ]),
    cache: new InMemoryCache(),
    connectToDevTools: isDev,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });

export default apClient;
