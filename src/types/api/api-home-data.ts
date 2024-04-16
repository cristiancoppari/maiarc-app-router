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
  services_block: ServicesBlock;
  premium_services_block: PremiumServicesBlock;
  accommodations_block: AccommodationsBlock;
  community_block: CommunityBlock;
  newsletter_block: NewsletterBlock;
  clickable_services: ClickableServices;
  localizations: Localizations4;
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

export interface ServicesBlock {
  id: number;
  title: string;
  text: string;
  services: Services;
}

export interface Services {
  data: Daum2[];
}

export interface Daum2 {
  id: number;
  attributes: Attributes3;
}

export interface Attributes3 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  main_image: MainImage;
  localizations: Localizations;
}

export interface MainImage {
  data: Data2;
}

export interface Data2 {
  id: number;
  attributes: Attributes4;
}

export interface Attributes4 {
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
  large?: Large2;
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

export interface Localizations {
  data: Daum3[];
}

export interface Daum3 {
  id: number;
  attributes: Attributes5;
}

export interface Attributes5 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface PremiumServicesBlock {
  id: number;
  items: Items;
}

export interface Items {
  data: Daum4[];
}

export interface Daum4 {
  id: number;
  attributes: Attributes6;
}

export interface Attributes6 {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  selector: any;
  main_image: MainImage2;
  images: Images2;
  localizations: Localizations2;
}

export interface MainImage2 {
  data: Data3;
}

export interface Data3 {
  id: number;
  attributes: Attributes7;
}

export interface Attributes7 {
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

export interface Images2 {
  data: Daum5[];
}

export interface Daum5 {
  id: number;
  attributes: Attributes8;
}

export interface Attributes8 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats4;
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

export interface Formats4 {
  large?: Large4;
  small?: Small4;
  medium?: Medium4;
  thumbnail: Thumbnail4;
}

export interface Large4 {
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

export interface Small4 {
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

export interface Medium4 {
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

export interface Thumbnail4 {
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

export interface Localizations2 {
  data: Daum6[];
}

export interface Daum6 {
  id: number;
  attributes: Attributes9;
}

export interface Attributes9 {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  selector: any;
}

export interface AccommodationsBlock {
  id: number;
  title: string;
  text: string;
}

export interface CommunityBlock {
  id: number;
  title: string;
  text: string;
}

export interface NewsletterBlock {
  id: number;
  title: string;
  text: string;
}

export interface ClickableServices {
  data: Daum7[];
}

export interface Daum7 {
  id: number;
  attributes: Attributes10;
}

export interface Attributes10 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  selector: string;
  main_image: MainImage3;
  ibiza_img: IbizaImg;
  pde_img: PdeImg;
  miami_img: MiamiImg;
  tulum_img: TulumImg;
  localizations: Localizations3;
}

export interface MainImage3 {
  data: Data4;
}

export interface Data4 {
  id: number;
  attributes: Attributes11;
}

export interface Attributes11 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats5;
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

export interface Formats5 {
  large: Large5;
  small: Small5;
  medium: Medium5;
  thumbnail: Thumbnail5;
}

export interface Large5 {
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

export interface Small5 {
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

export interface Medium5 {
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

export interface Thumbnail5 {
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

export interface IbizaImg {
  data: Data5;
}

export interface Data5 {
  id: number;
  attributes: Attributes12;
}

export interface Attributes12 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats6;
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

export interface Formats6 {
  large: Large6;
  small: Small6;
  medium: Medium6;
  thumbnail: Thumbnail6;
}

export interface Large6 {
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

export interface Small6 {
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

export interface Medium6 {
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

export interface Thumbnail6 {
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

export interface PdeImg {
  data: Data6;
}

export interface Data6 {
  id: number;
  attributes: Attributes13;
}

export interface Attributes13 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats7;
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

export interface Formats7 {
  large: Large7;
  small: Small7;
  medium: Medium7;
  thumbnail: Thumbnail7;
}

export interface Large7 {
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

export interface Small7 {
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

export interface Medium7 {
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

export interface Thumbnail7 {
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

export interface MiamiImg {
  data: Data7;
}

export interface Data7 {
  id: number;
  attributes: Attributes14;
}

export interface Attributes14 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats8;
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

export interface Formats8 {
  large: Large8;
  small: Small8;
  medium: Medium8;
  thumbnail: Thumbnail8;
}

export interface Large8 {
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

export interface Small8 {
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

export interface Medium8 {
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

export interface Thumbnail8 {
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

export interface TulumImg {
  data: Data8;
}

export interface Data8 {
  id: number;
  attributes: Attributes15;
}

export interface Attributes15 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats9;
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

export interface Formats9 {
  large: Large9;
  small: Small9;
  medium: Medium9;
  thumbnail: Thumbnail9;
}

export interface Large9 {
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

export interface Small9 {
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

export interface Medium9 {
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

export interface Thumbnail9 {
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

export interface Localizations3 {
  data: Daum8[];
}

export interface Daum8 {
  id: number;
  attributes: Attributes16;
}

export interface Attributes16 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  selector: string;
}

export interface Localizations4 {
  data: Daum9[];
}

export interface Daum9 {
  id: number;
  attributes: Attributes17;
}

export interface Attributes17 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Meta {}
