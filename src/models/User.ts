import {IMedia} from './StrapiGlobal';

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
  address: {
    id: number;
    rt: string;
    rw: string;
    city: string;
    province: string;
    zipcode: string;
    adressDetail: string;
    longitude: string;
    latitude: string;
  };
}

type UserRole = 'Admin' | 'Member';

export type {IUser, UserRole};
