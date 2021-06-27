import {
  Box,
  chakra,
  Heading,
  VisuallyHidden,
  useColorModeValue,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { FiLink } from "react-icons/fi";

const Headings = (props) => {
  const { children, id } = props;
  const { purples } = useColorModeValue("#5B34DA", "#9D86E9");
  return (
    <>
      <Heading paddingBlockStart="36px" {...props}>
        <Box pointerEvents="auto">
          <VisuallyHidden>Read the {children} section.</VisuallyHidden>
          <HStack align={"center"}>
            <Flex align={"center"} justify={"center"} rounded={"full"}>
            {children}
              {/*<chakra.a
                href={`#${id ?? ""}`}
                color={purples}
                fontWeight="600" 
                outline="none"
                opacity="0"
                _hover={{ opacity: 0.75 }}
                aria-label="anchor"
              >
                <FiLink />
              </chakra.a>*/}
              
            </Flex>
          </HStack>
          
        </Box>
      </Heading>
    </>
  );
};

export default Headings;