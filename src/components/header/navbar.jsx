import { Box, useColorModeValue, Link, Stack } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <>
      <Box
        as="nav"
        display="flex"
        flexDir={{ base: "row-reverse", lg: "row" }}
        alignItems="center"
        fontWeight="500"
        position='sticky'
        zIndex={10}
        top={0}
        backdropFilter='saturate(180%) blur(20px)'
      >
       <Stack direction="row" spacing={[1, 2, 3, 4]}>
            <Link
            _hover={{ color: useColorModeValue("#5B34DA", "#9D86E9")}} 
            href="/"
            >
              home
            </Link>
         
            <Link
            _hover={{ color: useColorModeValue("#5B34DA", "#9D86E9")}}
            href="/about"
            >
              about
            </Link>
      
            <Link 
            _hover={{ color: useColorModeValue("#5B34DA", "#9D86E9")}}
            href="/blog"
            >
              blog
            </Link>
        </Stack>

        
      </Box>
      
    </>
  )
}

export default Navbar;