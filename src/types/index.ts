export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  images: string[];
  amenities: string[];
  rating: number;
  reviewCount: number;
  type: 'Entire home' | 'Private room' | 'Shared room';
  beds: number;
  bathrooms: number;
  maxGuests: number;
  host: {
    id: string;
    name: string;
    avatar: string;
    isSuperhost: boolean;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Review {
  id: string;
  propertyId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
  user: {
    name: string;
    avatar?: string;
  };
}

export interface SearchFilters {
  location?: string;
  checkIn?: Date;
  checkOut?: Date;
  guests?: number;
  priceRange?: {
    min: number;
    max: number;
  };
  propertyType?: string[];
  amenities?: string[];
}