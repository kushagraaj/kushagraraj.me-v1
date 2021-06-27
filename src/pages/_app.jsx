import { ChakraProvider, Box} from "@chakra-ui/react"
import { DefaultSeo } from "next-seo"

import theme from "@/theme/index"
import Layout from "@/layouts/global"
import SEO from "next-seo.config"
import "@/styles/index.css"

const MyApp = ({ Component, pageProps }) => (
  <>
  <Box>
    <DefaultSeo {...SEO} />

    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </Box>
  </>
)

export default MyApp
