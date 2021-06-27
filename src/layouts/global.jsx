import { Box } from "@chakra-ui/react"


import Header from "@/components/header"
import Footer from "@/components/footer"

const Layout = ({ children }) => (
  <>
    <Header />
    <Box as="main" px={[4, 6, 10, 14, 20]} maxW="850" mx="auto">
      {children}
    </Box>
    <Footer />
  </>
)

export default Layout
