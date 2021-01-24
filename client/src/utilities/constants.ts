import { setContext } from "@apollo/client/link/context";

export const AUTH_TOKEN = "auth-token";
export const authHttpLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
// export const authWsLink = setContext((req,) => {
//   const token = localStorage.getItem(AUTH_TOKEN);
//   // console.log("token", token);'

//   return {
//    = {

//     }
//     options: {
//       reconnect: true,
//       connectionParams: {
//         authorization: token ? `Bearer ${token}` : "",
//       },
//     },
//   };
// });
