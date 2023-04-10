
import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
    uri: `https://api.ss.dev/resource/api`,
    cache: new InMemoryCache(),
});
