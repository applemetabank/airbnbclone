import { Header } from '@/components/layout/Header';
import { PropertyGrid } from '@/components/properties/PropertyGrid';
import { Property } from '@/types';

// Mock data for initial development
const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa with Ocean View',
    description: 'Beautiful villa overlooking the Pacific Ocean',
    price: 350,
    location: {
      city: 'Malibu',
      country: 'United States',
      coordinates: { lat: 34.0259, lng: -118.7798 },
    },
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    amenities: ['Pool', 'WiFi', 'Kitchen', 'Beach access'],
    rating: 4.9,
    reviewCount: 128,
    type: 'Entire home',
    beds: 4,
    bathrooms: 3,
    maxGuests: 8,
    host: {
      id: 'h1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      isSuperhost: true,
    },
  },
  {
    id: '2',
    title: 'Modern Downtown Loft',
    description: 'Stylish loft in the heart of the city',
    price: 200,
    location: {
      city: 'New York',
      country: 'United States',
      coordinates: { lat: 40.7128, lng: -74.0060 },
    },
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    amenities: ['WiFi', 'Kitchen', 'Gym', 'Workspace'],
    rating: 4.8,
    reviewCount: 95,
    type: 'Entire home',
    beds: 2,
    bathrooms: 2,
    maxGuests: 4,
    host: {
      id: 'h2',
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      isSuperhost: true,
    },
  },
  {
    id: '3',
    title: 'Cozy Mountain Cabin',
    description: 'Rustic cabin with stunning mountain views',
    price: 150,
    location: {
      city: 'Aspen',
      country: 'United States',
      coordinates: { lat: 39.1911, lng: -106.8175 },
    },
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    amenities: ['Fireplace', 'Hot tub', 'WiFi', 'Kitchen'],
    rating: 4.7,
    reviewCount: 76,
    type: 'Entire home',
    beds: 3,
    bathrooms: 2,
    maxGuests: 6,
    host: {
      id: 'h3',
      name: 'Emily Wilson',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      isSuperhost: false,
    },
  },
];

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-8">
        <PropertyGrid properties={mockProperties} />
      </main>
    </div>
  );
}

export default App;