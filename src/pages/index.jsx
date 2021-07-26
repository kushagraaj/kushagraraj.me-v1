import { Box, Button, Heading, Text, useColorModeValue, Link as ChakraLink, useColorMode } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import { seo } from "config"
import MDXComponents from "@/components/MDXComponents"
import { MDXProvider } from "@mdx-js/react"
import { RemoveBulletsFromList } from "../styles/typography"

const Home = () => {
  const color = useColorModeValue("#5B34DA", "#9D86E9")
  const color2 = useColorModeValue("white", "white")
  const text = useColorModeValue("black", "white")
  const isOdd = (num) => num % 2

  const title = `Home • ${seo.title}`
  const description = seo.description

  return (
    <>
    
     <MDXProvider components={MDXComponents}>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description
        }}
      />
      <Box
        as="section"
        d="flex"
        alignItems="left"
        flexDir="column"
        textAlign="left"
        py="4"
      > 
        <Box py="4">
          <Heading fontSize="48px">
            Hey, I'm Kushagra Raj
          </Heading>
          
        </Box>
        <Text color={text}>
				a developer, student from India. I like to code stuff using languages like javascript, typescript.
			</Text>
			<br />
			<Text color={text}>
				I also ❤️{" "}
			  many other things including:<br />
        Minecraft, Reddit, Movies
				and the Internet!
			</Text>
      </Box>

    
      <RemoveBulletsFromList>
      
      </RemoveBulletsFromList>
      </MDXProvider>
    </>
  )
}

export default Home
