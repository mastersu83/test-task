import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet-routing-machine";
import RoutingNew from "./RoutingNew";
import { useAppSelector } from "./hooks/appHooks";

function Map() {
  const { coordinates } = useAppSelector((state) => state.transportationSlice);
  const center: LatLngTuple = [44.0493595, 43.0592834];

  return (
    <>
      <MapContainer center={center} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <RoutingNew coordinates={coordinates} />
      </MapContainer>
    </>
  );
}

export default Map;
