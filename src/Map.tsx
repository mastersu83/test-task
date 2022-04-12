import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet-routing-machine";
import Routing from "./Routing";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "./hooks/appHooks";
import RoutingNew from "./RoutingNew";

type DataType = {
  from_lat: number;
  from_long: number;
  id: number;
  to_lat: number;
  to_long: number;
};

type InitialStateTypes = {
  data: DataType[];
};

export type PositionTypes = {
  pos1: LatLngTuple;
  pos2: LatLngTuple;
};

function Map() {
  const position1: LatLngTuple = [44.0493595, 43.0592834];
  const position2: LatLngTuple = [43.8493595, 44.0592834];
  const [currentTransportation, setCurrentTransportation] =
    useState<PositionTypes>();
  const position: PositionTypes = {
    pos1: [43.8493595, 44.0592834],
    pos2: [44.0493595, 43.0592834],
  };

  return (
    <>
      <MapContainer center={position1} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/*<Routing position={currentTransportation} />*/}
        <RoutingNew position={position} />
      </MapContainer>
    </>
  );
}

export default Map;
