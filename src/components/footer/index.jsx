import { Box, Button, Icon, Link as ChakraLink, Text, useColorModeValue } from "@chakra-ui/react"
import { FaGithub, FaInstagram, FaSpotify, FaSnapchat, FaReddit, FaSteamSymbol, FaTwitch, FaMailBulk, FaDiscord } from "react-icons/fa"


import { seo, data } from "config"

const socialAccounts = [
  
  { icon: FaGithub, path: "https://github.com/kushagraraj", title: "Github" },
  { icon: FaMailBulk, path: "mailto:hi@kushagraraj.me", title: "Mail" },
  { icon: FaInstagram, path: "https://www.instagram.com/brucemacgary__", title: "Instagram" },
  { icon: FaSpotify, path: "https://open.spotify.com/user/swfc7nj2mx7i1h6n0kf81itge", title: "Spotify" },
  {icon: FaDiscord, path: "https://discord.gg/R2WC5qtaAu", title: "Discord" },
  { icon: FaTwitch, path: "https://www.twitch.tv/brucemacgary", title: "Twitch" },
  { icon: FaSnapchat, path: "https://www.snapchat.com/add/brucemacgary", title: "Snapchat" },
  { icon: FaReddit, path: "https://www.reddit.com/user/brucemacgary", title: "Reddit" },
  { icon: FaSteamSymbol, path: "https://steamcommunity.com/id/brucemacgary", title: "Steam" }
]

const Footer = () => {
  const purples = useColorModeValue("#5B34DA", "#9D86E9")

  return (
    <>
    <div id="footer">
    <Box as="footer"  >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="left"
        flexDir="column"
        minH="2rem"
        px={[4, 6, 10, 14, 20]}
        maxW="850"
        mx="auto"
      >
          <Box py="2" alignItems="center" textAlign="center">
          <Text fontSize="md">
          Made from scratch using{" "}
            <ChakraLink
            _hover={{ textDecoration: "none" }}
              color={purples}
              href="https://nextjs.org/"
              fontWeight="600"
              _focus={{ outline: "none" }}
              aria-label="nextjs"
              isExternal
            >
              Next.js
            </ChakraLink>
            ,{" "}
            <ChakraLink
            color={purples}
            _hover={{ textDecoration: "none" }}
            fontWeight="600"
            href="https://vercel.com"
            aria-label="vercel"
            >
              Vercel{" "}
            </ChakraLink>
            and{" "}
            <ChakraLink
            color={purples}
            fontWeight="600"
            _hover={{ textDecoration: "none" }}
            href="https://chakra-ui.com/"
            aria-label="chakra"
            >
              Chakra UI
            </ChakraLink>
            . The code is{" "}
            
            <ChakraLink
              color={purples}
              href="https://github.com/kushagraraj"
              fontWeight="600"
              _focus={{ outline: "none" }}
              _hover={{ textDecoration: "none" }}
              isExternal
              aria-label="github"
            >
              open-source
              </ChakraLink>
              .
          </Text>
        </Box>
        <Box textAlign="center"  _hover={{ textDecoration: "none" }}>
          {socialAccounts.map((item, index) => (
            <ChakraLink
              href={item.path}
              aria-label={item.title}
              mx="1"
              _focus={{ outline: "none" }}
              _hover={{ textDecoration: "none" }}
              key={index}
              isExternal
            >
                <Icon color={purples} as={item.icon} w="5" h="5" />
            </ChakraLink>
          ))}
          <br />
        </Box>
        <Box py="1">
          <Text fontSize="sm" align="center">
            © 2021 by Kushagra Raj, All rights reserved.
          </Text>
          </Box>
      </Box>
      
    </Box>
    </div>
    </>
  )
}

export default Footer
