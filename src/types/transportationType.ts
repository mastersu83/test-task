import { LatLngLiteral, LatLngTuple } from "leaflet";

export type TransportationType = {
  key: number;
  id: number;
  transportation: string;
  loadingAddress: LoadingAddressType;
  unloadingAddress: UnLoadingAddressType;
};

type LoadingAddressType = {
  name: string;
  loading: number[];
};
type UnLoadingAddressType = {
  name: string;
  unloading: number[];
};

export type CoordinatesType = {
  loading: LatLngTuple;
  unLoading: LatLngTuple;
};
