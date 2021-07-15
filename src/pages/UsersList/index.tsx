import styled from 'styled-components';
import { useFetch } from 'services';
import { UsersListUrls } from 'config/url';
import { UsersListResponse } from 'types';
import { Heading, List } from './components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UsersList = () => {
  const { isLoading, error, data } = useFetch<UsersListResponse>(UsersListUrls.USERS_LIST, []);
  console.log(isLoading, error, data);

  return (
    <Container>
      <Heading>Users List</Heading>
      <List users={data} />
    </Container>
  );
};

export default UsersList;
