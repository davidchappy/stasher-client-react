import logo from "./logo.svg"
import { useQuery } from "@apollo/client"
import { GOODIES_QUERY } from "./graphql/query"
import {
  Flex,
  Box,
  Heading,
  Icon,
  Text,
  Button,
  List,
  ListItem,
  Container,
  Link
} from "@chakra-ui/react"
import Header from "./components/Header"
import Stash from "./components/Stash"

function App() {
  return (
    <Box className="App">
      <Header />
      <Container>
        <Flex align="center" direction="column" pt="2rem">
          <Heading as="h2" size="lg">
            Your Goodies
          </Heading>
          <Stash />
        </Flex>
      </Container>
    </Box>
  )
}

export default App
