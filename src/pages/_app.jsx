import { ChakraProvider, Box} from "@chakra-ui/react"
import { DefaultSeo } from "next-seo"
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import theme from "@/theme/index"
import Layout from "@/layouts/global"
import SEO from "next-seo.config"
import "@/styles/index.css"

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
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
 );
}

export default MyApp
