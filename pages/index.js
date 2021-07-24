import { Box, Button, Flex, Heading, Text } from 'theme-ui';

export default function Home() {
  return (
    <Box sx={{ width: ['50%'] }} m={'auto'}>
      <Flex>
        <Box px={2}>
          <Box sx={{ textAlign: 'center' }}>
            <Heading as="h1">Hello world!!!</Heading>
            <Text my={3}>With next.js + jest + styled components + rebass</Text>
          </Box>
          <Box my={3}>
            <Button variant="primary" mr={2}>
              Primary button
            </Button>
            <Button variant="secondary">Secondary button</Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
