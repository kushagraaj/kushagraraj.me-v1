import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { useRouter } from "next/router"
import NextLink from "next/link"
import dayjs from "dayjs"
import { tagColor } from "../UI/tagColor"
import TagComponent from "../UI/tag"




const BlogPost = ({ posts }) => {
  const router = useRouter()

  const summaryColor = useColorModeValue("black", "white")
  const dateColor = useColorModeValue("#5B34DA", "#9D86E9")
  const yearColor = useColorModeValue("black", "white")

  let year = 0
  

  return (
    <>
      {posts.map((post) => {
        const { slug, title, summary, tags, publishedAt } = post

        const thisYear = publishedAt.substring(0, 4)

        const YearComponent = thisYear !== year && (
          <Heading color={yearColor} mt="2">
            {thisYear}
          </Heading>
        )

        year = thisYear

        return (
          <Box my="3" py="2" px="4" rounded="md" key={slug}>
            {YearComponent}

            
            <Heading as="h3" fontSize="2xl" fontWeight="700" color={dateColor} _hover={{ opacity: 0.75 }}>
              <NextLink href={`/blog/${slug}`} aria-label="blog-page">
                <a>{title}</a>
              </NextLink>
            </Heading>
           

            <Text fontSize="17px" fontWeight="400" color={summaryColor} py="1">
              {summary}
            </Text>

            {tags.map((tag) => {
              const color = tagColor[tag]

              return (
                <TagComponent
                  color={color}
                  onClick={() =>
                    router.push({
                      pathname: "/blog/",
                      query: { tag },
                    })
                  }
                  key={tag}
                >
                  {tag}
                </TagComponent>
              )
            })}

            <Text fontSize="16px" fontWeight="500" color={dateColor} py="1">
              {dayjs(publishedAt).format("MMMM DD, YYYY")}
            </Text>
          </Box>
        )
      })}
    </>
  )
}

export default BlogPost
