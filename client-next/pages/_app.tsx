
import "tailwindcss/tailwind.css";
import '../styles/globals.css'
import { ApolloClient, HttpLink, ApolloProvider, InMemoryCache, split, NormalizedCacheObject } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";
// import { authHttpLink, AUTH_TOKEN } from "./utilities/constants";
let cache = new InMemoryCache();

const api = process.env.NODE_ENV === 'development' ? 'localhost/chat/graphql' : 'localhost/chat/graphql';
const ws = process.env.NODE_ENV === 'development' ? 'localhost/chat/graphql' : 'localhost/chat/graphql';



// const wsLink =
//   new WebSocketLink({

//     uri: `ws://${ws}`,
//     options: {
//       reconnect: true,
//       connectionParams: () => ({
//         authorization: `Bearer `,
//       }),
//     },
//   })

const httpLink = new HttpLink({
  uri: `http://${api}`,

})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  // wsLink,
  httpLink
);
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({ cache: cache, link: splitLink })
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <div className='flex justify-center'>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  )
}

export default MyApp
