import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";

const createRoutineMachineLayer = ({ coordinates }: any) => {
  return L.Routing.control({
    waypoints: [
      L.latLng([43.8493595, 44.0592834]),
      L.latLng([44.0493595, 43.0592834]),
    ],
    addWaypoints: false,
    show: false,
    routeWhileDragging: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });
};

const Routing = createControlComponent(createRoutineMachineLayer);

export default Routing;
