import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ApolloProvider } from "@apollo/client"
import client from "./graphql/client"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import theme from "./ui/theme"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <React.StrictMode>
      <ApolloProvider client={client}>
        <ChakraProvider resetCSS theme={theme}>
          <App />
        </ChakraProvider>
      </ApolloProvider>
    </React.StrictMode>
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
