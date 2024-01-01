import {Product} from './Product';
import {IAPIMeta} from './StrapiGlobal';
import {IUser} from './User';

interface Order {
  id: number;
  amount: number;
  product: {
    data: Product;
  };
}

type PaymentStatus = 'Unpaid' | 'Paid';

type TransactionStatus =
  | 'Menunggu Pembayaran'
  | 'Pembayaran Selesai'
  | 'Dibatalkan';

interface Transaction {
  id: 1;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    transactionStatus: TransactionStatus;
    specialNotes: string | null;
    orders: Order[];
    user: {
      data: IUser;
    };
    paymentInfo: {
      paymentStatus: PaymentStatus;
      totalPrice: number;
    };
  };
}

interface TransactionListResponse extends IAPIMeta {
  data: Transaction[];
}

export type {
  Order,
  PaymentStatus,
  TransactionStatus,
  Transaction,
  TransactionListResponse,
};
