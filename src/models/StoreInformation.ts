import {IMedia} from './StrapiGlobal';

export interface StoreInformation {
  data: {
    attributes: {
      name: string;
      createdAt: Date;
      updatedAt: Date;
      storeMapURL: string;
      adress: {
        id: string | number | null;
        rt: string | number | null;
        rw: string | number | null;
        city: string | number | null;
        province: string | number | null;
        zipcode: string | number | null;
        adressDetail: string | number | null;
        longitude: string | number | null;
        latitude: string | number | null;
      };
      storeLogo: {
        data: IMedia;
      };
    };
  };
}
