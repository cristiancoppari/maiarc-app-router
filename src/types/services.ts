export type ClickableServicesSelector = "luxuryAccommodations" | "yatchs" | "premiumVehicles";

export type Service = {
  mainImage: string;
  name: string;
  description: string;
};

export type Villa = {
  id: number;
  name: string;
  location: string | undefined;
  destination: string;
  mainImage: string;
  images: string[];
  rooms: number;
  capacity: number;
  includesBreakfast: boolean;
  uuid: string;
};

export type Hotel = {
  id: number;
  name: string;
  mainImage: string;
  images: string[];
  destination: string;
  capacity: number;
  stars: number;
  location: string;
  uuid: string;
};

export type Yatch = {
  id: number;
  name: string;
  mainImage: string;
  images: string[];
  destination: string;
  location: string | null;
  capacity: number;
  uuid: string;
};

export type PremiumVehicle = {
  id: number;
  name: string;
  mainImage: string;
  images: string[];
  destination: string;
  capacity: number;
  type: string;
  transmission: string;
  uuid: string;
};

export type SuperYatch = {
  id: number;
  name: string;
  mainImage: string;
  images: string[];
  location: string;
  capacity: number | null;
  cabins: number | null;
  uuid: string;
};

export type UniqueExperience = {
  id: number;
  name: string;
  mainImage: string;
  location: string | null;
  uuid: string;
};
