import { FC, useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { CoordinatesType } from "./types/transportationType";

type PropsType = {
  coordinates: CoordinatesType;
};

const RoutingNew: FC<PropsType> = ({ coordinates }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(coordinates.loading),
        L.latLng(coordinates.unLoading),
      ],
      addWaypoints: false,
      show: false,
      routeWhileDragging: false,
      fitSelectedRoutes: true,
    }).addTo(map);
    return () => {
      map.removeControl(routingControl);
    };
  }, [map, coordinates]);
  return null;
};

export default RoutingNew;
