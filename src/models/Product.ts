import {IAPIMeta, IMedia} from './StrapiGlobal';

interface Product {
  id: number;
  attributes: {
    productName: string;
    productType: string;
    productDescription: string;
    productPrice: number;
    minimumOrder: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    productImage: IMedia;
  };
}

interface ProductListReponse extends IAPIMeta {
  data: Product[];
}

export type {Product, ProductListReponse};
