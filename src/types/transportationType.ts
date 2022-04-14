import { LatLngTuple } from "leaflet";

export type TransportationType = {
  key: number;
  id: number;
  transportation: string;
  loadingAddress: LoadingAddressType;
  unloadingAddress: UnLoadingAddressType;
};

export type LoadingAddressType = {
  name: string;
  loading: LatLngTuple;
};
export type UnLoadingAddressType = {
  name: string;
  unloading: LatLngTuple;
};

export type CoordinatesType = {
  name: string[];
  loading: LatLngTuple;
  unloading: LatLngTuple;
};
