import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false
}

const chakraTheme = extendTheme({
  config
})

export default chakraTheme
