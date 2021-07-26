import { Box, Heading, useColorModeValue } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import { seo } from "config"
import MDXComponents from "@/components/MDXComponents"
import { MDXProvider } from "@mdx-js/react"
import MDXAbout from "../data/about.mdx";

const Home = () => {
  const color = useColorModeValue("#5B34DA", "#9D86E9")
  const isOdd = (num) => num % 2

  const title = `About — ${seo.title}`
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
          description,
          images: [
            {
              url: `${seo.canonical}profile.jpg`,
              width: "350px",
              height: "350px",
              alt: "hmmmm",
            },
          ],
        }}
      />
      <Box py="4">
           <Heading fontSize="48px">
            About
          </Heading>
          </Box>
        <Box
        as="article"
        alignitem="left">
        <MDXAbout />
        </Box>
        </MDXProvider>
    </>
  )
}

export default Home
