import { FC, useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { PositionTypes } from "./Map";

type PropsType = {
  position: PositionTypes;
};

const RoutingNew: FC<PropsType> = ({ position }) => {
  const map = useMap();

  const trek = true;

  useEffect(() => {
    if (!map) return;
    L.Routing.control({
      waypoints: trek && [L.latLng(position.pos1), L.latLng(position.pos2)],
      addWaypoints: false,
      show: false,
      routeWhileDragging: false,
      fitSelectedRoutes: true,
    }).addTo(map);
  }, [map]);
  return null;
};

export default RoutingNew;
