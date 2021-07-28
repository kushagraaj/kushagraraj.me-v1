import { Box, Heading } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import { seo } from "config"
import MDXComponents from "@/components/MDXComponents"
import { MDXProvider } from "@mdx-js/react"
import MDXWebsites from "../data/websites.mdx";

const Websites = () => {
  const title = `Websites — ${seo.title}`
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
            /websites
          </Heading>
      </Box>
        <Box
        as="article"
        alignitem="left"> 
        <MDXWebsites />
        </Box>
        </MDXProvider>
      
    </>
  )
}

export default Websites
