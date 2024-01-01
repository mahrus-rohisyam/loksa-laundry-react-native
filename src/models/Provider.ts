import {IMedia} from './StrapiGlobal';

type paymentCategory = 'Cash' | 'Electronic Money' | 'Bank';

interface IDeliveryProvider {
  id: number;
  attributes: {
    deliveryName: string;
    deliveryPrice: string;
    minimumDistanceMeters: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
}

interface DeliveryProviderRequest {
  data: {
    deliveryName: string;
    deliveryPrice: string;
    minimumDistanceMeters: string;
  };
}

interface IPaymentProvider {
  id: number;
  attributes: {
    provider: string;
    providerAccount: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    paymentCategory: paymentCategory;
    qrisScan: IMedia;
    providerImage: IMedia;
  };
}

interface PaymentProviderRequest {
  data: {
    provider: string;
    providerAccount: string;
    paymentCategory: paymentCategory;
  };
}

export type {
  IDeliveryProvider,
  IPaymentProvider,
  DeliveryProviderRequest,
  PaymentProviderRequest,
  paymentCategory,
};
