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
  // HERITAGE CATEGORY
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
    title: "Ancient Temples & Monuments",
    description: "Discover the architectural marvels and historical sites of Jharkhand",
    image: "https://images.pexels.com/photos/2382681/pexels-photo-2382681.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    duration: "6 Days / 5 Nights",
    price: 18999,
    rating: 4.6,
    category: "heritage",
    includes: ["Accommodation", "Meals", "Transportation", "Guide", "Entry Fees", "Cultural Shows"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jamshedpur",
        activities: ["Airport pickup", "Jubilee Park visit", "Tata Steel Zoological Park"],
        meals: ["Dinner"],
        accommodation: "The Sonnet Hotel"
      },
      {
        day: 2,
        title: "Historical Exploration",
        activities: ["Palace ruins tour", "Museum visit", "Local handicrafts shopping"],
        meals: ["Breakfast", "Lunch", "Dinner"]
      }
    ]
  },
  {
    id: 3,
    title: "Tribal Culture Experience",
    description: "Immerse yourself in the authentic tribal culture and traditions of Jharkhand",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    duration: "4 Days / 3 Nights",
    price: 13999,
    rating: 4.9,
    category: "heritage",
    includes: ["Accommodation", "Meals", "Transportation", "Cultural Guide", "Tribal Village Stay"],
    itinerary: [
      {
        day: 1,
        title: "Journey to Tribal Villages",
        activities: ["Village visit", "Traditional dance performance", "Handicraft workshop"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Tribal Heritage Resort"
      },
      {
        day: 2,
        title: "Cultural Immersion",
        activities: ["Traditional cooking class", "Art and craft learning", "Folk music evening"],
        meals: ["Breakfast", "Lunch", "Dinner"]
      }
    ]
  },

  // ADVENTURE CATEGORY
  {
    id: 4,
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
  },
  {
    id: 5,
    title: "Rock Climbing & Trekking Expedition",
    description: "Challenge yourself with rock climbing and trekking in Jharkhand's rugged terrain",
    image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    duration: "5 Days / 4 Nights",
    price: 16999,
    rating: 4.5,
    category: "adventure",
    includes: ["Accommodation", "Meals", "Transportation", "Climbing Gear", "Professional Guide", "Safety Equipment"],
    itinerary: [
      {
        day: 1,
        title: "Base Camp Setup",
        activities: ["Equipment briefing", "Basic climbing training", "Fitness assessment"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Adventure Base Camp"
      },
      {
        day: 2,
        title: "Rock Climbing Day 1",
        activities: ["Beginner routes", "Rappelling practice", "Navigation skills"],
        meals: ["Breakfast", "Lunch", "Dinner"]
      }
    ]
  },
  {
    id: 6,
    title: "River Rafting & Cave Exploration",
    description: "Navigate thrilling rapids and explore mysterious caves in Jharkhand",
    image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    duration: "3 Days / 2 Nights",
    price: 11999,
    rating: 4.6,
    category: "adventure",
    includes: ["Accommodation", "Meals", "Transportation", "Rafting Equipment", "Cave Gear", "Expert Guide"],
    itinerary: [
      {
        day: 1,
        title: "River Adventure",
        activities: ["White water rafting", "Rapids navigation", "Riverside camping"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Riverside Camp"
      },
      {
        day: 2,
        title: "Cave Exploration",
        activities: ["Cave trekking", "Underground formations", "Spelunking techniques"],
        meals: ["Breakfast", "Lunch", "Dinner"]
      }
    ]
  },

  // WILDLIFE CATEGORY
  {
    id: 7,
    title: "Betla National Park Safari",
    description: "Discover diverse wildlife including tigers, elephants, and rare birds in Betla National Park",
    image: "https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    duration: "4 Days / 3 Nights",
    price: 17999,
    rating: 4.8,
    category: "wildlife",
    includes: ["Accommodation", "Meals", "Transportation", "Safari Permits", "Nature Guide", "Binoculars"],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Betla",
        activities: ["Check-in at forest lodge", "Evening safari", "Wildlife orientation"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Forest Lodge Betla"
      },
      {
        day: 2,
        title: "Tiger Tracking",
        activities: ["Early morning safari", "Tiger tracking", "Bird watching session"],
        meals: ["Breakfast", "Lunch", "Dinner"]
      }
    ]
  },
  {
    id: 8,
    title: "Palamau Wildlife Expedition",
    description: "Explore the rich biodiversity of Palamau Tiger Reserve and surrounding forests",
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    duration: "5 Days / 4 Nights",
    price: 21999,
    rating: 4.7,
    category: "wildlife",
    includes: ["Accommodation", "All Meals", "Transportation", "Multiple Safaris", "Wildlife Expert", "Photography Guide"],
    itinerary: [
      {
        day: 1,
        title: "Palamau Entry",
        activities: ["Forest department briefing", "Jeep safari", "Wildlife photography workshop"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Palamau Forest Resort"
      },
      {
        day: 2,
        title: "Deep Forest Safari",
        activities: ["Elephant safari", "Leopard tracking", "Night safari"],
        meals: ["Breakfast", "Lunch", "Dinner"]
      }
    ]
  },
  {
    id: 9,
    title: "Birding Paradise Tour",
    description: "Specialized bird watching tour covering multiple habitats and endemic species",
    image: "https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    duration: "6 Days / 5 Nights",
    price: 19999,
    rating: 4.9,
    category: "wildlife",
    includes: ["Accommodation", "Meals", "Transportation", "Birding Equipment", "Expert Ornithologist", "Bird Identification Guide"],
    itinerary: [
      {
        day: 1,
        title: "Wetland Birding",
        activities: ["Early morning bird walk", "Wetland species identification", "Photography session"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Eco-Lodge"
      },
      {
        day: 2,
        title: "Forest Canopy Birds",
        activities: ["Canopy tower birding", "Endemic species spotting", "Bird call identification"],
        meals: ["Breakfast", "Lunch", "Dinner"]
      }
    ]
  },

  // SPIRITUAL CATEGORY
  {
    id: 10,
    title: "Sacred Temples Journey",
    description: "Visit the most revered temples and spiritual sites across Jharkhand",
    image: "https://images.pexels.com/photos/3757951/pexels-photo-3757951.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    duration: "7 Days / 6 Nights",
    price: 16999,
    rating: 4.8,
    category: "spiritual",
    includes: ["Accommodation", "Vegetarian Meals", "Transportation", "Temple Guide", "Puja Arrangements"],
    itinerary: [
      {
        day: 1,
        title: "Baidyanath Dham",
        activities: ["Baidyanath Temple darshan", "Temple complex tour", "Evening aarti"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Dharamshala Deoghar"
      },
      {
        day: 2,
        title: "Rajrappa Temple",
        activities: ["Chinnamasta Temple visit", "River confluence view", "Spiritual discourse"],
        meals: ["Breakfast", "Lunch", "Dinner"]
      }
    ]
  },
  {
    id: 11,
    title: "Yoga & Meditation Retreat",
    description: "Find inner peace through yoga, meditation, and spiritual practices",
    image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    duration: "5 Days / 4 Nights",
    price: 14999,
    rating: 4.9,
    category: "spiritual",
    includes: ["Accommodation", "Sattvic Meals", "Yoga Mat", "Meditation Cushion", "Spiritual Guide"],
    itinerary: [
      {
        day: 1,
        title: "Foundation & Assessment",
        activities: ["Yoga assessment", "Meditation basics", "Pranayama introduction"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Ashram Retreat"
      },
      {
        day: 2,
        title: "Deepening Practice",
        activities: ["Advanced asanas", "Silent meditation", "Spiritual discourse"],
        meals: ["Breakfast", "Lunch", "Dinner"]
      }
    ]
  },
  {
    id: 12,
    title: "Pilgrimage Circuit",
    description: "Complete spiritual circuit covering Jharkhand's most important pilgrimage sites",
    image: "https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    duration: "8 Days / 7 Nights",
    price: 22999,
    rating: 4.7,
    category: "spiritual",
    includes: ["Accommodation", "All Meals", "Transportation", "Pilgrimage Guide", "Ritual Items", "Sacred Book"],
    itinerary: [
      {
        day: 1,
        title: "Deoghar Pilgrimage",
        activities: ["Baba Baidyanath darshan", "Naulakha Mandir", "Spiritual bath"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Pilgrimage Lodge"
      },
      {
        day: 2,
        title: "Giddheshwar Temple",
        activities: ["Ancient temple visit", "Cave meditation", "Holy water collection"],
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
  {
    id: 'home',
    label: 'Home',
    href: '#home',
    hasDropdown: false
  },
  {
    id: 'destinations',
    label: 'Destinations',
    href: '#destinations',
    hasDropdown: false
  },
  {
    id: 'packages',
    label: 'Packages',
    href: '#packages',
    hasDropdown: false
  },
  {
    id: 'attractions',
    label: 'Attractions',
    href: '#attractions',
    hasDropdown: false
  },
  {
    id: 'travel-info',
    label: 'Travel Info',
    href: '#travel-info',
    hasDropdown: false
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
    hasDropdown: false
  }
];