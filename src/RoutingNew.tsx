import { FC, useEffect } from "react";
import { useMap } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import { CoordinatesType } from "./types/transportationType";

type PropsType = {
  coordinates: CoordinatesType;
};

const RoutingNew: FC<PropsType> = ({ coordinates }) => {
  const map = useMap();

  console.log(coordinates);

  const trek = true;

  useEffect(() => {
    if (!map) return;
    L.Routing.control({
      waypoints: trek && [
        L.latLng(coordinates.loading),
        L.latLng(coordinates.unLoading),
      ],
      addWaypoints: false,
      show: false,
      routeWhileDragging: false,
      fitSelectedRoutes: true,
    }).addTo(map);
  }, [map]);
  return null;
};

export default RoutingNew;
