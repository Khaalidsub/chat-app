import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, NormalizedCacheObject, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { authHttpLink, AUTH_TOKEN } from './utilities/constants';
import { useClient } from './ApolloClient';
import { AuthContext, AuthContextProvider } from './AuthContext';

// let cache = new InMemoryCache();

// const api = process.env.NODE_ENV === 'development' ? 'localhost/chat/graphql' : 'localhost/chat/graphql';
// const ws = process.env.NODE_ENV === 'development' ? 'localhost/chat/graphql' : 'localhost/chat/graphql';



// const wsLink =
//   new WebSocketLink({

//     uri: `ws://${ws}`,
//     options: {
//       reconnect: true,
//       connectionParams: () => ({
//         authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`,
//       }),
//     },
//   })

// const httpLink = new HttpLink({
//   uri: `http://${api}`,

// })

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   authHttpLink.concat(httpLink),
// );


const RenderApp = () => {
  const { auth } = useContext(AuthContext)
  const authClient = useClient();
  useEffect(() => {
    console.log('in renderApp :', auth);
  }, [auth])

  // const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({ cache: authClient.cache, link: authClient.link })
  return (
    <ApolloProvider client={authClient}>
      <App />
    </ApolloProvider>)
}
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider >
      <RenderApp />
    </AuthContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
