export interface Root {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  block_1: Block1;
  localizations: Localizations;
}

export interface Block1 {
  id: number;
  title: string;
  text: string;
}

export interface Localizations {
  data: Daum[];
}

export interface Daum {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Meta {}
