import {
  Checkbox,
  Input,
  Label,
  Radio,
  Select
} from '@rebass/forms/styled-components';
import { Box, Button, Flex, Heading, Text } from 'rebass/styled-components';

export default function Home() {
  return (
    <>
      <Box width={1 / 2} m={'auto'}>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box px={2}>
            <Box textAlign={'center'}>
              <Heading as="h1">Hello world!!!</Heading>
              <Text my={3}>
                With next.js + jest + styled components + rebass
              </Text>
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
      <Box as="form" onSubmit={(e) => e.preventDefault()} py={3}>
        <Flex mx={-2} mb={3}>
          <Box width={1 / 2} px={2}>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" defaultValue="Jane Doe" />
          </Box>
          <Box width={1 / 2} px={2}>
            <Label htmlFor="location">Location</Label>
            <Select id="location" name="location" defaultValue="NYC">
              <option>NYC</option>
              <option>DC</option>
              <option>ATX</option>
              <option>SF</option>
              <option>LA</option>
            </Select>
          </Box>
        </Flex>
        <Flex mx={-2} flexWrap="wrap">
          <Label width={[1 / 2, 1 / 4]} p={2}>
            <Radio id="beep" name="beep" value="beep" defaultChecked />
            Beep
          </Label>
          <Label width={[1 / 2, 1 / 4]} p={2}>
            <Radio id="boop" name="beep" value="boop" />
            Boop
          </Label>
          <Label width={[1 / 2, 1 / 4]} p={2}>
            <Checkbox
              id="remember"
              name="remember"
              // sx={{
              //   'input:checked ~ &': {
              //     color: 'red'
              //   },
              //   'input:focus ~ &': {
              //     color: 'blue',
              //     bg: 'rgba(255, 255, 255, 0.5)'
              //   }
              // }}
            />
            Remember Me
          </Label>
          <Box px={2} ml="auto">
            <Button>Beep</Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
