import React from "react"
import { Flex, Box, Heading, Container } from "@chakra-ui/react"
import Header from "../../components/Header"
import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <Box>
      <Header />
      <Container>
        <Flex align="center" direction="column" pt="2rem">
          <Heading as="h2" size="lg">
            Your Stashables
          </Heading>
          <Outlet />
        </Flex>
      </Container>
    </Box>
  )
}

export default Root
