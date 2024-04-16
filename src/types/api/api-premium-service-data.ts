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
  hero: Hero;
  block_1: Block1;
  block_2: Block2;
  localizations: Localizations;
}

export interface Hero {
  id: number;
  images: Images;
}

export interface Images {
  data: Daum[];
}

export interface Daum {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  large: Large;
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Block1 {
  id: number;
  title: string;
  text: string;
  style: string;
  image: string;
  main_image: MainImage;
}

export interface MainImage {
  data: Data2;
}

export interface Data2 {
  id: number;
  attributes: Attributes3;
}

export interface Attributes3 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats2;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Formats2 {
  large: Large2;
  small: Small2;
  medium: Medium2;
  thumbnail: Thumbnail2;
}

export interface Large2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Small2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Block2 {
  id: number;
  title: string;
  text: string;
  style: string;
  image: string;
  main_image: MainImage2;
}

export interface MainImage2 {
  data: Data3;
}

export interface Data3 {
  id: number;
  attributes: Attributes4;
}

export interface Attributes4 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats3;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Formats3 {
  large: Large3;
  small: Small3;
  medium: Medium3;
  thumbnail: Thumbnail3;
}

export interface Large3 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Small3 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium3 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail3 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Localizations {
  data: Daum2[];
}

export interface Daum2 {
  id: number;
  attributes: Attributes5;
}

export interface Attributes5 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Meta {}
