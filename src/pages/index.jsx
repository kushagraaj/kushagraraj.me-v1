import { Box, Button, Heading, Text, useColorModeValue, Link as ChakraLink, useColorMode } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import { seo } from "config"
import MDXComponents from "@/components/MDXComponents"
import { MDXProvider } from "@mdx-js/react"
import Projects from "../data/home.mdx";
import Timeline from "../data/timeline.mdx"

const Home = () => {
  const color = useColorModeValue("#5B34DA", "#9D86E9")
  const color2 = useColorModeValue("white", "white")
  const text = useColorModeValue("black", "white")
  const isOdd = (num) => num % 2

  const title = `Home — ${seo.title}`
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
          <Heading fontSize="45px">
            Hello there
          </Heading>
          
        </Box>
        <Text color={text}>
				My name is Kushagra Raj aka BruceMacGary. I'm into developing and learning new things. I work with languages like javascript, typescript and python. You can visit{" "}
        <ChakraLink
            color={color}
            _hover={{ textDecoration: "none" }}
            href="/about"
            aria-label="about-page"
            >
              this
            </ChakraLink>
            {" "}page to know more about me.
			</Text>
      <Projects />
      <Timeline />
      <br />
			<Text color={text}>
				I also ❤️{" "}
			  many other things including:<br />
        Minecraft, Reddit, Movies
				and the Internet!
			</Text>
      </Box>
      </MDXProvider>
    </>
  )
}

export default Home
