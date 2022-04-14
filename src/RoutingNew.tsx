import { FC, useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { CoordinatesType } from "./types/transportationType";

type PropsType = {
  coordinates: CoordinatesType;
};

const RoutingNew: FC<PropsType> = ({ coordinates }) => {
  const map = useMap();
  let points = [L.latLng(coordinates.loading), L.latLng(coordinates.unloading)];

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: points,
      addWaypoints: false,
      show: false,
      routeWhileDragging: false,
      fitSelectedRoutes: true,
      plan: L.Routing.plan(points, {
        createMarker: function (i, wp, n) {
          return L.marker(wp.latLng, {
            draggable: false,
          })
            .bindPopup(coordinates.name[i])
            .openPopup();
        },
      }),
    }).addTo(map);
    return () => {
      map.removeControl(routingControl);
    };
  }, [map, coordinates]);
  return null;
};

export default RoutingNew;
