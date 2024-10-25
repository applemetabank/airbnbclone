import { Property } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  return (
    <Card className={cn('group cursor-pointer overflow-hidden', className)}>
      <CardContent className="p-0">
        <AspectRatio ratio={4/3}>
          <img
            src={property.images[0]}
            alt={property.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </AspectRatio>
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg truncate">{property.title}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-current" />
              <span>{property.rating}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {property.location.city}, {property.location.country}
          </p>
          <div className="flex items-baseline gap-1">
            <span className="font-semibold">${property.price}</span>
            <span className="text-sm text-muted-foreground">night</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}