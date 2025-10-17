

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string; 
}

export type PillProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};


export interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
  propertyImage?: string;
  rating?: number;
  reviewCount?: number;
}
