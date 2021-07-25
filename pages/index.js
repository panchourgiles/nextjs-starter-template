import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box boxSize="sm" m="auto">
      <Flex justifyContent="center" flexDirection="column" m="auto">
        <Heading textAlign="center" as="h1" my="2">
          Hello world
        </Heading>
        <Text textAlign="center" my="4">
          With next.js + jest + chakraui
        </Text>
        <Stack spacing={4} direction="row" align="center">
          <Button colorScheme="lime" size="xs" variant="outline">
            Click me
          </Button>
          <Button colorScheme="lime" size="sm">
            Click me
          </Button>
          <Button colorScheme="teal" size="md" variant="ghost">
            Click me
          </Button>
          <Button colorScheme="blue" size="lg" variant="link">
            Click me
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
