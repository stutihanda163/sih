export interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  duration: string;
  category: string;
  price?: number;
  highlights: string[];
  location: {
    district: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

export interface TourPackage {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: number;
  rating: number;
  includes: string[];
  itinerary: ItineraryDay[];
  category: 'adventure' | 'heritage' | 'wildlife' | 'spiritual' | 'family';
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  meals: string[];
  accommodation?: string;
}

export interface Attraction {
  id: number;
  name: string;
  description: string;
  image: string;
  gallery: string[];
  location: string;
  bestTime: string;
  activities: string[];
  timings: string;
  entryFee: string;
  featured: boolean;
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  tourType: string;
  preferredDate: string;
}

export interface NewsletterForm {
  email: string;
}

export interface BookingForm {
  name: string;
  email: string;
  phone: string;
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequests: string;
}

export interface WeatherInfo {
  season: string;
  temperature: string;
  description: string;
  icon: string;
  color: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: NavigationItem[];
}