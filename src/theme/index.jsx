import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
  global: (theme) => ({
    "html, body": {
      fontSize: "20px",
    },
    a: {
      color: theme.colorMode === "light" ? "#5B34DA" : "#9D86E9",
      _hover: {
        textDecoration: "none",
        
      },
    },
    scrollbarWidth: `thin`,
      scrollbarColor: mode(`blueGray.400 blueGray.200`, `blueGray.400 blueGray.700`),
      "::-webkit-scrollbar": {
        width: `7px`,
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: mode(`blueGray.200`, `blueGray.700`),
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: theme.colorMode === "light" ? "#5B34DA" : "#9D86E9",
        borderWidth: `1px`,
      },
  })
};

const fonts = {
  heading: "Rubik, -apple-system",
  body: "Rubik, -apple-system",
}

const theme = extendTheme({
  styles,
  fonts,
  colors: {
    gray: {
      800: '#000000'
    },
    primary: "#5B34DA",
    secondary: "#9D86E9"
  },
})

export default theme