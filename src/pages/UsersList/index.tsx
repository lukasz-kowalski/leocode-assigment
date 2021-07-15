import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { useFetch } from 'services';
import { UsersListUrls } from 'config/url';
import { UsersListResponse, UserDTO } from 'types';
import { filterUsers } from 'lib/pages';
import { Heading, List, Search } from './components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const timer = 300;

const UsersList = () => {
  const { isLoading, error, data } = useFetch<UsersListResponse>(UsersListUrls.USERS_LIST, []);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<UserDTO[]>([]);

  const debouncedFilteredUsersUpdater = useMemo(
    () => debounce((value: UserDTO[]) => setFilteredUsers(value), timer),
    []
  );

  useEffect(() => {
    debouncedFilteredUsersUpdater(filterUsers(searchQuery, data));

    return () => {
      debouncedFilteredUsersUpdater.cancel();
    };
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
