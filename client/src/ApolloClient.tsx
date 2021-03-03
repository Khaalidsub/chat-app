import * as React from "react"
import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { authHttpLink, AUTH_TOKEN } from "./utilities/constants";
import { useContext, useEffect, useMemo, useRef } from "react";
import { AuthContext } from "./AuthContext";
const api = process.env.NODE_ENV === 'development' ? 'localhost:3001/graphql' : 'localhost/chat/graphql';
const ws = process.env.NODE_ENV === 'development' ? 'localhost:3001/graphql' : 'localhost/chat/graphql';
const client = new ApolloClient({
    cache: new InMemoryCache()
});
export const useClient = () => {
    const { auth } = useContext(AuthContext)

    // useMemo(() => {
    //     console.log('in appollo client :', auth);
    // }, [auth])

    const subscriptionClient = useRef<SubscriptionClient>()
    useMemo(() => {
        // console.log('Here in auth subscriptionClient', auth);

        if (auth) {
            if (subscriptionClient.current) {
                subscriptionClient.current.close()
            }
            subscriptionClient.current = new SubscriptionClient(
                `ws://${ws}`,
                {
                    reconnect: true,
                    connectionParams: {
                        authorization: `Bearer ${auth}`,
                    }
                }
            );


        }
    }, [auth]);
    const splitLink = useMemo(() => {
        // console.log('Here in auth Split Link', auth);
        const httpLink = new HttpLink({
            uri: `http://${api}`,
            headers: {
                authorization: `Bearer ${auth}`,
            }

        });

        if (auth && subscriptionClient.current) {
            const websocketLink = new WebSocketLink(subscriptionClient.current);

            return split(
                ({ query }) => {
                    const definition = getMainDefinition(query);
                    return (
                        definition.kind === "OperationDefinition" &&
                        definition.operation === "subscription"
                    );
                },
                websocketLink,
                httpLink
            );
        }

        return httpLink;
    }, [auth]);

    useMemo(() => {
        // console.log('Here in auth Combo', auth);
        client.setLink(splitLink);
    }, [splitLink]);


    return client;
}