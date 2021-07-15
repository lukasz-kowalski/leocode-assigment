import { ReactNode } from 'react';
import styled from 'styled-components';
import { Breakpoints } from 'config/styles';

type PropsType = {
  children: ReactNode;
};

const Wrapper = styled.main`
  margin: 1.6rem auto 0 auto;

  @media only screen and (min-width: ${Breakpoints.DESKTOP}) {
    width: 1025px;
    margin-top: 6rem;
  }
`;

const Layout = ({ children }: PropsType) => {
  return (
    <div>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default Layout;
