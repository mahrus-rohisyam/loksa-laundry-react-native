import {IMedia} from './StrapiGlobal';

interface IAddress {
  id: number;
  rt: string;
  rw: string;
  city: string;
  province: string;
  zipcode: string;
  adressDetail: string;
  longitude: string;
  latitude: string;
}
interface IUser {
  id: number;
  email: string;
  provider: string;
  confirmed: Boolean;
  blocked: Boolean;
  createdAt: Date;
  updatedAt: Date;
  username: 'Admin';
  phoneNumber: '08123456789';
  fullname: 'Admin Lestarti';
  userRole: UserRole;
  avatar: IMedia;
  address: IAddress;
}

interface IUserInComponent {
  id: number;
  attributes: {
    email: string;
    provider: string;
    confirmed: true;
    blocked: false;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    phoneNumber: string;
    fullname: string;
    userRole: 'Member' | 'Admin';
    avatar: IMedia;
  };
}

type UserRole = 'Admin' | 'Member';

export type {IUser, UserRole};
