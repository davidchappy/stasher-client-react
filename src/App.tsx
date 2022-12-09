import logo from "./logo.svg"
import { useQuery } from "@apollo/client"
import { STASHABLES_QUERY } from "./graphql/query"
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
            Your Stashables
          </Heading>
          <Stash />
        </Flex>
      </Container>
    </Box>
  )
}

export default App
