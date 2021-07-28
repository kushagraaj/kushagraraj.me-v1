import { useState, useEffect, useCallback } from "react"
import { Alert, AlertIcon, Box, Flex, Input, Heading, TagRightIcon } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { NextSeo } from "next-seo"
import Fuse from "fuse.js"
import { Search2Icon } from "@chakra-ui/icons"
import { getAllFilesFrontMatter } from "@/lib/posts"
import { tagColor } from "@/components/UI/tagColor"
import { seo } from "config"
import TagComponent from "@/components/UI/tag"
import BlogPost from "@/components/blogPost"

const options = {
  includeScore: true,
  threshold: 0.3,
  ignoreLocation: true,
  keys: ["title"],
}

const Blog = ({ posts }) => {
  const router = useRouter()

  const fuse = new Fuse(posts, options)

  const [blogPost, setBlogPost] = useState(posts)
  const [searchValue, setSearchValue] = useState("")

  const filteredPosts = (tag) => {
    const blogResults = posts.filter((post) => post.tags.includes(tag))
    setBlogPost(blogResults)
  }

  const updateSearch = () => {
    const results = fuse.search(searchValue)
    const blogResults = results.map((res) => res.item)
    setBlogPost(blogResults)
  }

  const delayedSearch = useCallback(updateSearch, [searchValue])

  useEffect(() => {
    if (searchValue.length === 0) {
      return setBlogPost(posts)
    }
    delayedSearch()
  }, [delayedSearch])

  useEffect(() => {
    if (router.query?.tag !== undefined) {
      filteredPosts(router.query?.tag)
    }
  }, [router])

  const title = `Blog - ${seo.title}`
  const description = seo.description
  const url = `${seo.canonical}blog`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
        }}
      />
      <Box py="4">
           <Heading fontSize="50px">
            /blog
          </Heading>
          </Box>
          <Box
        as="article"
        alignitem="left">
          I've been writing blogs since 2020 about gaming and tech since I made my first docusaurus blog only site. In this new site I've written 3 articles. Use the search below to filter by title.
        </Box>

      <Box
        as="section"
        fontSize="16px"
        py="4"
      >
        <Flex>
          <Input
            onChange={(e) => {
              setSearchValue(e.target.value)
            }}
            value={searchValue}
            variant="outline"
            placeholder="🔍 Search articles"
            maxWidth="850px"
            TagRightIcon={Search2Icon}
          />
        </Flex>

        <Flex
           justify="center"
           align="center"
           direction="row"
           wrap="wrap"
           m="1.5rem 0"
        >
          {Object.keys(tagColor).map((tag, index) => {
            const color = tagColor[tag]

            return (
              <Box key={index}>
                <TagComponent color={color} onClick={() => filteredPosts(tag)}>
                  {tag}
                </TagComponent>
              </Box>
            )
          })}
        </Flex>

        {blogPost.length > 0 ? (
          <BlogPost posts={blogPost} />
        ) : (
          <Alert
            status="info"
            borderRadius="md"
            d="flex"
            justifyContent="center"
            mx="auto"
            maxWidth="850px"
            fontWeight="500"
          >
            <AlertIcon />
            No blog post has been found!
          </Alert>
        )}
      </Box>
    </>
  )
}

export async function getStaticProps() {
  const data = await getAllFilesFrontMatter("blog")
  const posts = data.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )

  return { props: { posts } }
}

export default Blog
