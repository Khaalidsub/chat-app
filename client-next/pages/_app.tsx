
import "tailwindcss/tailwind.css";
import '../styles/globals.css'
import { useContext, useEffect } from 'react';
import { ApolloClient, HttpLink, ApolloProvider, InMemoryCache, split, NormalizedCacheObject } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { useClient } from '../ApolloClient';
import { AuthContext, AuthContextProvider } from '../AuthContext';
import { authHttpLink, AUTH_TOKEN } from "../utilities/constants";
function MyApp({ Component, pageProps }) {
  const { auth } = useContext(AuthContext)
  const authClient = useClient();
  useEffect(() => {
    console.log('in renderApp :', auth);
  }, [auth])

  return (
    <ApolloProvider client={authClient}>
      <div className='flex justify-center'>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  )
}

export default MyApp
