import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFetch } from 'services';
import { UsersListUrls } from 'config/url';
import { UsersListResponse, UserDTO } from 'types';
import { useDebounce } from 'lib/hooks';
import { filterUsers } from 'lib/pages';
import { Heading, List, Search } from './components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UsersList = () => {
  const { isLoading, error, data } = useFetch<UsersListResponse>(UsersListUrls.USERS_LIST, []);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<UserDTO[]>([]);

  const updateFilteredUsers = (users: UserDTO[]) => setFilteredUsers(users);

  const debouncedFilteredUsersUpdater = useDebounce(updateFilteredUsers);

  useEffect(() => {
    debouncedFilteredUsersUpdater(filterUsers(searchQuery, data));
  }, [debouncedFilteredUsersUpdater, data, searchQuery]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Container>
      <Heading>Users List</Heading>
      <Search onChange={handleSearchChange} searchQuery={searchQuery} />
      {isLoading ? <div>Loading...</div> : <List users={filteredUsers} />}
      {error && <div>{error}</div>}
    </Container>
  );
};

export default UsersList;
