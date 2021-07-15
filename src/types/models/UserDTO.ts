import { AddressDTO } from './AddressDTO';
import { CompanyDTO } from './CompanyDTO';

export type UserDTO = {
  address: AddressDTO;
  company: CompanyDTO;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};
