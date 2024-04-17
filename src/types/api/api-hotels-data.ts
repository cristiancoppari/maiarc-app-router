export interface Root {
  data: Daum[];
  meta: Meta;
}

export interface Daum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  includes_breakfast: boolean;
  stars: number;
  capacity: number;
  location: string;
  uuid: string;
  main_image: MainImage;
  images: Images;
  destination: Destination;
}

export interface MainImage {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  url: string;
}

export interface Images {
  data: Daum2[];
}

export interface Daum2 {
  id: number;
  attributes: Attributes3;
}

export interface Attributes3 {
  url: string;
}

export interface Destination {
  data: Data2;
}

export interface Data2 {
  id: number;
  attributes: Attributes4;
}

export interface Attributes4 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  order: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
