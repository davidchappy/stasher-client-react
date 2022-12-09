import { ApolloClient, InMemoryCache } from "@apollo/client"

const uri =
  process.env.REACT_APP_API_HOST || "https://drab-rose-scorpion-sock.cyclic.app"

let _client: ApolloClient<unknown> | null = null
const getClient = () => {
  if (!_client) {
    _client = new ApolloClient({
      uri,
      cache: new InMemoryCache()
    })
  }
  return _client
}

export default getClient
