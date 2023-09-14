import {IProduct} from './Product';
import {IUserInComponent} from './User';

type transactionStatusType =
  | 'Menunggu Pembayaran'
  | 'Diantar'
  | 'Selesai'
  | 'Dijemput'
  | 'Diproses';

type paymentStatusType = 'Unpaid' | 'Paid';

interface IOrder {
  id: number;
  amount: string;
  product: IProduct;
}

interface OrderRequest {
  id: number;
  amount: number;
}

interface IPaymentInfo {
  id: number;
  paymentStatus: paymentStatusType;
  totalPrice: string;
}

interface PaymentRequest {
  paymentProvider: number[];
  paymentStatus: paymentStatusType;
  totalPrice: number;
}

interface IDelivery {
  id: number;
  userDistance: string;
  totalDeliverCost: number | string;
}

interface DeliverRequest {
  deliveryProvider: number[];
  userDistance: string;
  totalDeliverCost: number;
}

interface ITransaction {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    transactionStatusType: transactionStatusType;
    publishedAt: Date;
    specialNotes: string;
    orders: IOrder[];
    user: {
      data: IUserInComponent;
    };
    paymentInfo: IPaymentInfo;
    delivery: IDelivery;
  };
}

interface CreateTransactionRequest {
  data: {
    transactionStatusType: transactionStatusType;
    orders: OrderRequest[];
    user: number[];
    delivery: DeliverRequest;
    paymentInfo: PaymentRequest;
    specialNotes: string | null;
  };
}

export type {
  IDelivery,
  IOrder,
  ITransaction,
  OrderRequest,
  PaymentRequest,
  DeliverRequest,
  transactionStatusType,
  paymentStatusType,
  CreateTransactionRequest,
};
