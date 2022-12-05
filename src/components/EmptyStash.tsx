import { Flex, Box, Text } from "@chakra-ui/react"

const EmptyStash = () => {
  return (
    <Flex align="center" direction="column" pt="2rem">
      <Text>Your stash is empty! Try adding a Goodie below.</Text>
    </Flex>
  )
}

export default EmptyStash
