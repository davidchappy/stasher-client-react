import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ApolloProvider } from "@apollo/client"
import client from "./graphql/client"
import { GOODIES_QUERY } from "./graphql/query"

console.log("GQL host: ", process.env.REACT_APP_API_HOST)

client
  .query({
    query: GOODIES_QUERY
  })
  .then(result => console.log(result))
  .catch(error => console.log(error))

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
