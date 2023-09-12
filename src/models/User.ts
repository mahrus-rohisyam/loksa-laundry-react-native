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
  userRole: 'Admin' | 'Member';
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

export type {IUser};
