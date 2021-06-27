import { Link as ChakraLink, chakra, Code } from "@chakra-ui/react"
import NextLink from "next/link"

export const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref aria-label="externallnk">
        <ChakraLink {...props} />
      </NextLink>
    )
  }

  return <ChakraLink isExternal {...props} />
}

export const UnorderedList = (props) => (
  <>
    <chakra.ul
      style={{paddingLeft: "30px"}}
      {...props}
    />
  </>
)

export const OrderedList = (props) => (
  <>
    <chakra.ol
      style={{ paddingLeft: "30px", paddingTop: "0.5rem" }}
      {...props}
    />
  </>
)

export const ListItem = (props) => (
  <>
    <chakra.li style={{ paddingBottom: "0.25rem" }} {...props} />
  </>
)

export const InlineCode = (props) => (
  <>
    <Code {...props} />
  </>
)
