import styled from 'styled-components';
import { UserDTO } from 'types';
import ListItem from './ListItem';

type PropsType = {
  users: UserDTO[];
};

const OL = styled.ol`
  color: ${({ theme }) => theme.colors.grey};
`;

const List = ({ users }: PropsType) => {
  return (
    <OL>
      {users.map((user) => (
        <ListItem name={user.name} username={user.username} />
      ))}
    </OL>
  );
};

export default List;
