// example Button with variants
import styled from 'styled-components';
import { space, variant } from 'styled-system';

const Button = styled('button')(
  { space },
  {
    appearance: 'none',
    border: 'none',
    fontFamily: 'inherit',
    borderRadius: 4,
    cursor: 'pointer'
  },
  variant({
    scale: 'buttons',
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
        py: 2,
        px: 3
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
        py: 2,
        px: 3
      }
    }
  })
);

export default Button;
