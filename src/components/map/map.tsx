import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { layerGroup, Marker } from 'leaflet';
import { currentCustomIcon, defaultCustomIcon } from './icons';
import useMap from '@/hooks/use-map';
import { Location } from '@/types/location';
import { City } from '@/types/city';

type NamedLocation = {
  id: string;
  location: Location;
};

type MapProps = {
  city: City;
  points: NamedLocation[];
  selectedPoint: NamedLocation | null;
  kind: 'offer' | 'cities';
};

export const Map = ({
  city,
  points,
  selectedPoint,
  kind = 'cities',
}: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== null && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  useEffect(() => {
    map?.setView(
      {
        lat: city.location.latitude,
        lng: city.location.longitude,
      },
      city.location.zoom,
    );
  }, [city, map]);

  const classname = kind === 'offer' ? 'offer__map map' : 'cities__map map';

  return <section className={classname} ref={mapRef}></section>;
};
