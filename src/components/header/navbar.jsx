import { useState } from "react"
import { Box, chakra, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"
import css from "styled-components"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const bg = useColorModeValue("white", "black")
  const color = useColorModeValue("black", "white")

  const closeMenu = () => {
    setIsOpen(false)
  }

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
        
        <chakra.ul
          bg="transparent"
          color={color}
          display="flex"
          position="static"
          top="5rem"
          spacing={12}
          left="5%"
          right="5%"
          py={{ base: "2", lg: "0" }}
          px={{ base: "4", lg: "0" }}
          alignItems="center"
          zIndex="2"
        >
          <chakra.li
          spacing={12}
            listStyleType="none"
          >
            <NextLink href="/" aria-label="homenav">
              <a onClick={closeMenu}>home</a>
            </NextLink>
          </chakra.li>
          <chakra.li
          spacing="12px"
          listStyleType="none"
          >
            <NextLink href="/about" aria-label="aboutnav">
              <a onClick={closeMenu}>about</a>
            </NextLink>
          </chakra.li>

          <chakra.li listStyleType="none">
            <NextLink href="/blog" aria-label="blognav">
              <a onClick={closeMenu}>blog</a>
            </NextLink>
          </chakra.li>
        </chakra.ul>

        
      </Box>
      
    </>
  )
}

export default Navbar;