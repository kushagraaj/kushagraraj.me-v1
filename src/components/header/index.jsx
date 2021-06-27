import { Box } from "@chakra-ui/react"


import ToggleThemeIcon from "../UI/ToggleThemeIcon"
import Navbar from "./navbar"

const Header = () => (
  <>
    <Box as="header">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        h="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW="850"
        mx="auto"
      >
        <ToggleThemeIcon />
        <Navbar />
      </Box>
    </Box>
  </>
)

export default Header
