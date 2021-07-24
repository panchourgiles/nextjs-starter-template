import styled from 'styled-components';
import { border, color, flexbox, layout, space } from 'styled-system';

const Box = styled.div`
  box-sizing: border-box;
  ${space}
  ${layout}
  ${color}
  ${border}
  ${flexbox}
`;

export default Box;
