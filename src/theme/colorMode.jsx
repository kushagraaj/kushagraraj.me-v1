import { extendTheme, useColorModeValue } from "@chakra-ui/react"

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
  
}

const colorMode = extendTheme({ config })

export default colorMode
