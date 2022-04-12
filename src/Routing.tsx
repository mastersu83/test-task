import { createControlComponent } from "@react-leaflet/core";
import L, { LatLngTuple } from "leaflet";

const createRoutineMachineLayer = (props: any) => {
  console.log(props);
  const { position } = props;

  const trek = false;

  return L.Routing.control({
    waypoints: trek
      ? [L.latLng([43.8493595, 44.0592834]), L.latLng([44.0493595, 43.0592834])]
      : [L.latLng([1, 0]), L.latLng([0, 1])],
    addWaypoints: false,
    show: false,
    routeWhileDragging: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });
};

const Routing = createControlComponent(createRoutineMachineLayer);

export default Routing;
