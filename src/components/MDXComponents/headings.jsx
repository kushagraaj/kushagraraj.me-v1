import {
  Box,
  Heading,
  VisuallyHidden,
  useColorModeValue
} from "@chakra-ui/react";

const Headings = (props) => {
  const { children, id } = props;
  const { purples } = useColorModeValue("#5B34DA", "#9D86E9");
  return (
    <>
      <Heading paddingBlockStart="36px" paddingBlockEnd="20px" {...props}>
        <Box pointerEvents="auto">
          <VisuallyHidden>Read the {children} section.</VisuallyHidden>
          {children}
        </Box>
      </Heading>
    </>
  );
};

export default Headings;