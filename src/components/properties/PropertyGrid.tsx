import { Property } from '@/types';
import { PropertyCard } from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
}

export function PropertyGrid({ properties }: PropertyGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}