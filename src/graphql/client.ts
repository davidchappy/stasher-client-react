import { ApolloClient, InMemoryCache } from "@apollo/client"

const uri =
  process.env.REACT_APP_API_HOST || "https://drab-rose-scorpion-sock.cyclic.app"

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache()
})

export default client
