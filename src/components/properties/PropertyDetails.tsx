import { useState } from 'react';
import { Property } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Bed,
  Bath,
  Users,
  MapPin,
  Star,
  Calendar,
  Home,
} from 'lucide-react';
import { PropertyGallery } from './PropertyGallery';
import { PropertyMap } from './PropertyMap';
import { PropertyReviews } from './PropertyReviews';
import { BookingCalendar } from './BookingCalendar';

interface PropertyDetailsProps {
  property: Property;
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PropertyGallery
            images={property.images}
            selectedIndex={selectedImageIndex}
            onSelect={setSelectedImageIndex}
          />
          
          <Card className="mt-8">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{property.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-2">
                    <MapPin className="h-4 w-4" />
                    {property.location.city}, {property.location.country}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-semibold">{property.rating}</span>
                    <span className="text-muted-foreground">
                      ({property.reviewCount} reviews)
                    </span>
                  </div>
                  {property.host.isSuperhost && (
                    <Badge variant="outline" className="mt-2">
                      Superhost
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span>{property.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bed className="h-4 w-4" />
                  <span>{property.beds} beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-4 w-4" />
                  <span>{property.bathrooms} baths</span>
                </div>
              </div>
              
              <Tabs defaultValue="about">
                <TabsList>
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about">
                  <p className="text-muted-foreground">{property.description}</p>
                </TabsContent>
                
                <TabsContent value="amenities">
                  <div className="grid grid-cols-2 gap-4">
                    {property.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="location">
                  <div className="h-[400px] rounded-lg overflow-hidden">
                    <PropertyMap
                      lat={property.location.coordinates.lat}
                      lng={property.location.coordinates.lng}
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <PropertyReviews propertyId={property.id} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">${property.price}</span>
                <span className="text-muted-foreground">night</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BookingCalendar propertyId={property.id} />
              <Button size="lg" className="w-full mt-4">
                Reserve
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}