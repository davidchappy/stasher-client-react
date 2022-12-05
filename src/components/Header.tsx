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
import ToggleColorMode from "./ToggleColorMode"

const Header = () => {
  return (
    <Container>
      <Flex justify="space-between" align="center" py="1.5rem">
        <Heading as="h1" size="3xl" textAlign="left">
          Stasher
        </Heading>
        <Box>
          <ToggleColorMode />
        </Box>
      </Flex>
    </Container>
  )
}

export default Header
