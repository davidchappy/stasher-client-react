import { useColorMode, Switch } from "@chakra-ui/react"

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Switch size="md" onChange={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Switch>
  )
}

export default ToggleColorMode
