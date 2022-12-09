import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { useRouteError } from "react-router-dom"

const ErrorRoute = () => {
  const error: any = useRouteError()!

  const handleClear = () => {
    window.location.reload()
  }

  return (
    <Box background="background">
      <Heading>Oops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text fontStyle={"italic"} color="error">
        {error.statusText || error.message}
      </Text>
      <Button onClick={handleClear}>Reload</Button>
    </Box>
  )
}

export default ErrorRoute
