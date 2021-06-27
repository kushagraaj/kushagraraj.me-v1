import { useState } from "react"
import { Box, chakra, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"

import HamburgerMenu from "../UI/hamburgerMenu"

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
      >
        <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
        <chakra.ul
          bg={{ base: bg, lg: "transparent" }}
          color={{ base: "white", lg: color }}
          display={{
            base: isOpen ? "block" : "none",
            lg: "flex",
          }}
          position={{ base: "absolute", lg: "static" }}
          top="5rem"
          left="5%"
          right="5%"
          rounded={{ base: "lg", lg: "none" }}
          py={{ base: "2", lg: "0" }}
          px={{ base: "4", lg: "0" }}
          alignItems={{ lg: "center" }}
          zIndex="2"
        >
          <chakra.li
            listStyleType="none"
            px={{ lg: "8" }}
            py={{ base: "3", lg: "0" }}
          >
            <NextLink href="/" aria-label="homenav">
              <a onClick={closeMenu}>home</a>
            </NextLink>
          </chakra.li>
          <chakra.li
            listStyleType="none"
            px={{ lg: "8" }}
            py={{ base: "3", lg: "0" }}
            
          >
            <NextLink href="/about" aria-label="aboutnav">
              <a onClick={closeMenu}>about</a>
            </NextLink>
          </chakra.li>

          <chakra.li
            listStyleType="none"
            px={{ lg: "8" }}
            py={{ base: "3", lg: "0" }}
          >
            <NextLink href="/blog" aria-label="blognav">
              <a onClick={closeMenu}>blog</a>
            </NextLink>
          </chakra.li>
        </chakra.ul>

        
      </Box>
      
    </>
  )
}

export default Navbar
