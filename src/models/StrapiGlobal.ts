interface IMedia {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

interface MediaUploadRequest {
  ref: string;
  refId: string;
  field: string;
  files: any;
}

export type {IMedia, IMeta, MediaUploadRequest};
