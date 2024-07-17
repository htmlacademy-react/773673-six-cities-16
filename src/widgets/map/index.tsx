import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { layerGroup, Marker } from 'leaflet';
import useMap from './hooks/use-map';
import { currentCustomIcon, defaultCustomIcon } from './icons';
import { CityType } from '../../entities/city';
import { OfferType } from '../../entities/offer';

type MapProps = {
  city: CityType;
  points: OfferType[];
  selectedPoint: OfferType | undefined;
};

export const Map = ({ city, points, selectedPoint }: MapProps): JSX.Element => {
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
            selectedPoint !== undefined && point.title === selectedPoint.title
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

  return <section className="cities__map map" ref={mapRef}></section>;
};
