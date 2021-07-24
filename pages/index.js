import { Box, Button, Flex, Heading, Text } from 'rebass/styled-components';

export default function Home() {
  return (
    <Box width={1 / 2} m={'auto'}>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Box px={2}>
          <Box textAlign={'center'}>
            <Heading as="h1">Hello world!!!</Heading>
            <Text my={3}>With next.js + jest + styled components + rebass</Text>
          </Box>
          <Box>
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
