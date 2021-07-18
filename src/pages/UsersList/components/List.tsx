import styled from 'styled-components';
import { UserDTO } from 'types';
import ListItem from './ListItem';

type PropsType = {
  users?: UserDTO[];
};

const OL = styled.ol`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: ${({ theme }) => theme.colors.grey};
`;

const List = ({ users = [] }: PropsType) => {
  return (
    <OL>
      {users.map((user) => (
        <ListItem key={user.id} name={user.name} username={user.username} />
      ))}
    </OL>
  );
};

export default List;
