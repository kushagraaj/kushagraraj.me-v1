import { chakra, Image, useColorModeValue, Box } from "@chakra-ui/react"
import ColorModeToggle from "../UI/colorModeToggle"

const ToggleThemeIcon = () => {
  const purples = useColorModeValue("#5B34DA", "#9D86E9")
  return (
  <>
      <Box fontSize="30px" color={purples}>
      <ColorModeToggle />
      </Box>
  </>
  )
}

export default ToggleThemeIcon
