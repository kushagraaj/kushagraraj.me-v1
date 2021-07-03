import { Box, Heading, Text, useColorModeValue, Link as ChakraLink } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import { seo } from "config"

const Home = () => {
  const title = `404 • ${seo.title}`
  const description = "an invalid page"
  const purples = useColorModeValue("#5B34DA", "#9D86E9")
  return (
    <>
    
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description
        }}
      />

      <head>
          <link
            rel="preload"
            href="/fonts/Rubik.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Rubik.woff2"
            as="font"
            crossOrigin=""
          />
      </head>

      <Box
      align="center"
      >
          
          <Heading fontSize="5xl">
          451 – Unavailable For Legal Reasons
          </Heading>
          <Text py="4" align="left">
          Why show a generic 404 when I can make it sound mysterious? It seems you've found something that used to exist, or you spelled something wrong. I'm guessing you spelled something wrong. Can you double check that URL?
          </Text>
          <Text
          fontSize="2xl"
          fontWeight="600"
          >
          <ChakraLink
              href="/"
              aria-label="home"
              mx="1"
              _focus={{ outline: "none" }}
              isExternal
              color={purples}
            >
              Return Home
          </ChakraLink>
        </Text>
        </Box>

     
    </>
  )
}

export default Home
