export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type PointType = {
  title: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};
