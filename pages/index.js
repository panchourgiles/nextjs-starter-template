import Box from '@components/Box';
import Button from '@components/Button';
import Subtitle from '@components/Subtitle.js';
import Title from '@components/Title';

export default function Home() {
  return (
    <>
      <Title>Hello world!!!</Title>

      <Subtitle>With next.js + jest + styled-components</Subtitle>

      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {Array(1, 2, 3, 4, 5, 6).map((item) => (
          <Box
            key={item}
            flexBasis={[
              'calc(100%)',
              'calc(50% - 8px)',
              'calc(33.3% - 8px)',
              'calc(25% - 8px)'
            ]}
            mx={1}
            my={2}
            p={2}
            bg={`blue.${item - 1}`}
            color={'text'}
            borderRadius={'base'}
          >
            This is a box {item}
          </Box>
        ))}
      </Box>
      <Button mx={2} variant="primary">
        Primary
      </Button>
      <Button mx={2} variant="secondary">
        Secondary
      </Button>
    </>
  );
}
