import styled from 'styled-components';

type PropsType = {
  name: string;
  username: string;
};

const Item = styled.li`
  grid-column: 2 / span 1;
  margin-left: 3.6rem;
  margin-bottom: 1.6rem;
`;

const Container = styled.div`
  display: flex;
`;

const Name = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

const Nickname = styled.p`
  margin-left: 1.6rem;
  color: ${({ theme }) => theme.colors.grey};
`;

const ListItem = ({ name, username }: PropsType) => {
  return (
    <Item>
      <Container>
        <Name>{name}</Name>
        <Nickname>@{username}</Nickname>
      </Container>
    </Item>
  );
};

export default ListItem;
