import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const purples = useColorModeValue("#5B34DA", "#9D86E9")
  return (
    <>
      <Box
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? (
         <SunIcon name="sun-icon" color={purples} />
        ) : (
          <MoonIcon name="moon-icon" color={purples} />
        )}
      </Box>
    </>
  )
}

export default DarkModeToggle
// "#5B34DA", "#9D86E9"