import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface PropertyMapProps {
  lat: number;
  lng: number;
}

export function PropertyMap({ lat, lng }: PropertyMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');
      
      const map = new Map(mapRef.current!, {
        center: { lat, lng },
        zoom: 15,
        mapId: 'YOUR_MAP_ID', // Optional: Use a custom map style
      });

      new google.maps.Marker({
        position: { lat, lng },
        map,
      });
    };

    initMap();
  }, [lat, lng]);

  return <div ref={mapRef} className="w-full h-full" />;
}