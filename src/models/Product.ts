import {IMedia, IMeta} from './StrapiGlobal';

interface IProduct {
  data: {
    id: number;
    attributes: {
      productName: string;
      productType: 'Kilogram' | 'Piece';
      productDescription: string;
      productPrice: string;
      minimumOrder: string;
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
      productImage: IMedia;
    };
  };
  meta: IMeta;
}

interface CreateProductRequest {
  data: {
    productName: string;
    productType: 'Kilogram' | 'Piece';
    productDescription: string;
    productPrice: string;
    minimumOrder: string;
  };
}

export type {IProduct, CreateProductRequest};
