import { Box, Button, Flex, Heading, Text } from 'rebass/styled-components';

export default function Home() {
  return (
    <Box width={1 / 2} m={'auto'}>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Box px={2}>
          <Box textAlign={'center'}>
            <Heading as="h1">Hello world!!!</Heading>
            <Text my={3}>
              With next.js + jest + styled components + rebass theme
            </Text>
          </Box>
          <Box>
            <Button variant="primary" mr={2}>
              Primary
            </Button>
            <Button variant="secondary" mr={2}>
              Secondary
            </Button>
            <Button variant="outline" mr={2}>
              Outline
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
