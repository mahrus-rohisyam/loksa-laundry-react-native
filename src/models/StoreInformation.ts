import {IMedia} from './StrapiGlobal';
import {IAddress} from './User';

interface IStoreInformation {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: Date;
      updatedAt: Date;
      storeMapURL: string;
      adress: {
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
      storeLogo: IMedia;
    };
  };
  meta: {};
}

interface StoreInformationRequest {
  data: {
    name: string;
    adress: IAddress;
  };
}

export type {StoreInformationRequest, IStoreInformation};
