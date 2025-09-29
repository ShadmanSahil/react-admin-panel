import { Box, Flex } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Flex direction="column" minH="100vh">
      {/* Header */}
      <Box as="header" bg="blue.600" color="white" p={4}>
        My App Header
      </Box>

      {/* Main content */}
      <Box as="main" flex="1" p={4} bg="gray.50">
        {children}
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.600" color="white" p={4} textAlign="center">
        My App Footer
      </Box>
    </Flex>
  );
}
