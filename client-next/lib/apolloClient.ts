import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { AUTH_TOKEN, isLocalStorage } from "../utilities/constants";
const isNode = typeof module !== "undefined";
let apolloClient;
const api =
  process.env.NODE_ENV === "development"
    ? "localhost:3001/graphql"
    : "localhost/chat/graphql";
const ws =
  process.env.NODE_ENV === "development"
    ? "localhost:3001/graphql"
    : "localhost/chat/graphql";

const wsLink = new WebSocketLink({
  uri: `ws://${ws}`,
  options: {
    reconnect: true,
    connectionParams: () => ({
      authorization: `Bearer ${isLocalStorage(isNode)}`,
    }),
  },
});

const httpLink = new HttpLink({
  uri: `http://${api}`,
  headers: {
    authorization: `Bearer ${isLocalStorage(isNode)}`,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // set to true for SSR
    link: splitLink,
    cache: new InMemoryCache(),
  });
}
export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
