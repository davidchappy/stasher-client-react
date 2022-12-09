import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import { ApolloProvider } from "@apollo/client"
import getClient from "./graphql/client"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import theme from "./ui/theme"
import { RouterProvider } from "react-router-dom"
import router from "./routes/AppRoutes"

const root = ReactDOM.createRoot(
  document.getElementById("root")! as HTMLElement
)

root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider resetCSS theme={theme}>
      <ApolloProvider client={getClient()}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
