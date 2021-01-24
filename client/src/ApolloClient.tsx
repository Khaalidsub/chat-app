import * as React from "react"
import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { authHttpLink, AUTH_TOKEN } from "./utilities/constants";
import { useRef } from "react";
const api = process.env.NODE_ENV === 'development' ? 'localhost/chat/graphql' : 'localhost/chat/graphql';
const ws = process.env.NODE_ENV === 'development' ? 'localhost/chat/graphql' : 'localhost/chat/graphql';
const client = new ApolloClient({
    cache: new InMemoryCache()
});
export const useClient = (userId: string | null) => {
    console.log('userid', userId);

    const subscriptionClient = useRef<SubscriptionClient>()
    React.useEffect(() => {
        if (userId) {
            if (subscriptionClient.current) {
                subscriptionClient.current.close()
            }
            subscriptionClient.current = new SubscriptionClient(
                `ws://${ws}`,
                {
                    reconnect: true,
                    connectionParams: {
                        authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`,
                    }
                }
            );


        }
    }, [userId]);
    const splitLink = React.useMemo(() => {
        const httpLink = new HttpLink({
            uri: `http://${api}`
        });

        if (userId && subscriptionClient.current) {
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
                authHttpLink.concat(httpLink)
            );
        }

        return authHttpLink.concat(httpLink);
    }, [userId]);

    React.useEffect(() => {
        client.setLink(splitLink);
    }, [splitLink]);

    return client;
}