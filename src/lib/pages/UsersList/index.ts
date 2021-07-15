import { UserDTO } from 'types';

export const filterUsers = (query: string, users: UserDTO[]) => {
  return users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
};
