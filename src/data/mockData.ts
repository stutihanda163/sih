import { Destination, TourPackage, Attraction, WeatherInfo, NavigationItem } from '../types';

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Netarhat",
    description: "The Queen of Chotanagpur, famous for sunrise and sunset views",
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.8,
    duration: "2-3 Days",
    category: "Hill Station",
    price: 3500,
    highlights: ["Sunrise Point", "Sunset Point", "Magnolia Point", "Koel View Point"],
    location: {
      district: "Latehar",
      coordinates: { lat: 23.4667, lng: 84.2667 }
    }
  },
  {
    id: 2,
    name: "Hundru Falls",
    description: "Spectacular 320ft waterfall on the Subarnarekha river",
    image: "https://images.pexels.com/photos/1552058/pexels-photo-1552058.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.6,
    duration: "1 Day",
    category: "Waterfall",
    price: 1200,
    highlights: ["320ft Waterfall", "Natural Pool", "Rock Climbing", "Photography"],
    location: {
      district: "Ranchi",
      coordinates: { lat: 23.4167, lng: 85.5833 }
    }
  },
  {
    id: 3,
    name: "Betla National Park",
    description: "Wildlife sanctuary home to tigers, elephants, and deer",
    image: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.7,
    duration: "2-3 Days",
    category: "Wildlife",
    price: 4500,
    highlights: ["Tiger Safari", "Elephant Spotting", "Bird Watching", "Nature Trails"],
    location: {
      district: "Latehar",
      coordinates: { lat: 23.8833, lng: 84.1833 }
    }
  },
  {
    id: 4,
    name: "Deoghar",
    description: "Sacred city with the famous Baidyanath Jyotirlinga temple",
    image: "https://images.pexels.com/photos/3699259/pexels-photo-3699259.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.9,
    duration: "2 Days",
    category: "Religious",
    price: 2800,
    highlights: ["Baidyanath Temple", "Nandan Pahar", "Tapovan", "Satsang Ashram"],
    location: {
      district: "Deoghar",
      coordinates: { lat: 24.4833, lng: 86.7 }
    }
  },
  {
    id: 5,
    name: "Parasnath Hills",
    description: "Highest peak in Jharkhand, sacred to Jains",
    image: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.5,
    duration: "1-2 Days",
    category: "Trekking",
    price: 2200,
    highlights: ["Highest Peak", "Jain Temples", "Trekking Trails", "Panoramic Views"],
    location: {
      district: "Giridih",
      coordinates: { lat: 23.9667, lng: 86.1667 }
    }
  },
  {
    id: 6,
    name: "Ranchi",
    description: "Capital city with Rock Garden and Tagore Hill",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.4,
    duration: "2-3 Days",
    category: "City",
    price: 3200,
    highlights: ["Rock Garden", "Tagore Hill", "Jagannath Temple", "Kanke Dam"],
    location: {
      district: "Ranchi",
      coordinates: { lat: 23.3441, lng: 85.3096 }
    }
  }
];

export const tourPackages: TourPackage[] = [
  {
    id: 1,
    title: "Jharkhand Heritage Trail",
    description: "Explore the rich cultural heritage and ancient temples of Jharkhand",
    image: "https://images.pexels.com/photos/3699259/pexels-photo-3699259.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    duration: "5 Days / 4 Nights",
    price: 15999,
    rating: 4.8,
    category: "heritage",
    includes: ["Accommodation", "Meals", "Transportation", "Guide", "Entry Fees"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Ranchi",
        activities: ["Airport pickup", "Hotel check-in", "Jagannath Temple visit", "Rock Garden"],
        meals: ["Dinner"],
        accommodation: "Hotel Radisson Blu"
      },
      {
        day: 2,
        title: "Ranchi to Deoghar",
        activities: ["Baidyanath Temple", "Nandan Pahar", "Local market visit"],
        meals: ["Breakfast", "Lunch", "Dinner"]
      }
    ]
  },
  {
    id: 2,
    title: "Waterfall Adventure Package",
    description: "Experience the magnificent waterfalls and natural beauty of Jharkhand",
    image: "https://images.pexels.com/photos/1552058/pexels-photo-1552058.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    duration: "4 Days / 3 Nights",
    price: 12999,
    rating: 4.7,
    category: "adventure",
    includes: ["Accommodation", "Meals", "Transportation", "Adventure Gear", "Guide"],
    itinerary: [
      {
        day: 1,
        title: "Hundru Falls Exploration",
        activities: ["Waterfall trekking", "Photography session", "Natural pool swimming"],
        meals: ["Breakfast", "Lunch", "Dinner"]
      }
    ]
  }
];

export const attractions: Attraction[] = [
  {
    id: 1,
    name: "Dassam Falls",
    description: "A spectacular 144-feet waterfall on the Kanchi river, perfect for photography and nature lovers.",
    image: "https://images.pexels.com/photos/1552058/pexels-photo-1552058.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    gallery: [
      "https://images.pexels.com/photos/1552058/pexels-photo-1552058.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    location: "Taimara, Bundu",
    bestTime: "Post Monsoon (Oct-Feb)",
    activities: ["Photography", "Nature Walk", "Picnic", "Rock Climbing"],
    timings: "6:00 AM - 6:00 PM",
    entryFee: "₹20 per person",
    featured: true,
    category: "waterfall"
  },
  {
    id: 2,
    name: "Jagannath Temple Ranchi",
    description: "An architectural marvel inspired by Puri's Jagannath Temple, showcasing beautiful craftsmanship.",
    image: "https://images.pexels.com/photos/3699259/pexels-photo-3699259.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    gallery: [
      "https://images.pexels.com/photos/3699259/pexels-photo-3699259.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    location: "Ranchi",
    bestTime: "Year Round",
    activities: ["Prayer", "Architecture Tour", "Cultural Experience", "Photography"],
    timings: "5:00 AM - 9:00 PM",
    entryFee: "Free",
    featured: true,
    category: "religious"
  }
];

export const weatherInfo: WeatherInfo[] = [
  {
    season: "Summer",
    temperature: "25°C - 42°C",
    description: "Hot and dry. Good for indoor attractions and hill stations like Netarhat.",
    icon: "☀️",
    color: "from-orange-400 to-red-500"
  },
  {
    season: "Monsoon",
    temperature: "22°C - 32°C",
    description: "Perfect for waterfalls. Heavy rainfall makes the landscape lush and green.",
    icon: "🌧️",
    color: "from-blue-400 to-indigo-500"
  },
  {
    season: "Winter",
    temperature: "8°C - 25°C",
    description: "Ideal time to visit. Pleasant weather perfect for all outdoor activities.",
    icon: "❄️",
    color: "from-green-400 to-teal-500"
  }
];

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  {
    id: 'destinations',
    label: 'Destinations',
    href: '#destinations',
    hasDropdown: true,
    dropdownItems: [
      { id: 'hill-stations', label: 'Hill Stations', href: '#hill-stations' },
      { id: 'waterfalls', label: 'Waterfalls', href: '#waterfalls' },
      { id: 'wildlife', label: 'Wildlife', href: '#wildlife' },
      { id: 'religious', label: 'Religious Sites', href: '#religious' }
    ]
  },
  {
    id: 'packages',
    label: 'Tour Packages',
    href: '#packages',
    hasDropdown: true,
    dropdownItems: [
      { id: 'adventure', label: 'Adventure Tours', href: '#adventure' },
      { id: 'heritage', label: 'Heritage Tours', href: '#heritage' },
      { id: 'family', label: 'Family Packages', href: '#family' }
    ]
  },
  { id: 'attractions', label: 'Attractions', href: '#attractions' },
  { id: 'plan', label: 'Plan Trip', href: '#plan' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];