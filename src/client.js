import { ApolloClient, InMemoryCache} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  link: createUploadLink({
    uri: "http://localhost:4000/graphql"
  }),
  cors: true,
  cache: new InMemoryCache()
})

export default client;