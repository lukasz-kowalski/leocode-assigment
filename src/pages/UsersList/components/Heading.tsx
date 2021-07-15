import styled from 'styled-components';
import { Breakpoints } from 'config/styles';
import { H1 } from 'components';

const Heading = styled(H1)`
  margin-bottom: 2.4rem;
  text-align: center;

  @media only screen and (min-width: ${Breakpoints.DESKTOP}) {
    margin-bottom: 3.6rem;
  }
`;

export default Heading;
