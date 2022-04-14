import {
  CoordinatesType,
  TransportationType,
} from "../../types/transportationType";
import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  transportations: TransportationType[];
  coordinates: CoordinatesType;
};

const initialState: InitialStateType = {
  transportations: [
    {
      key: 1,
      id: 1,
      transportation: "Заявка на перевозку №1",
      loadingAddress: {
        name: "Пункт загрузки №1",
        loading: [44.0493595, 43.0592834],
      },
      unloadingAddress: {
        name: "Пункт разгрузки №1",
        unloading: [43.8493595, 44.0592834],
      },
    },
    {
      key: 2,
      id: 2,
      transportation: "Заявка на перевозку №2",
      loadingAddress: {
        name: "Пункт загрузки №2",
        loading: [47.0593595, 43.0592834],
      },
      unloadingAddress: {
        name: "Пункт разгрузки №2",
        unloading: [43.8493595, 44.0692834],
      },
    },
    {
      key: 3,
      id: 3,
      transportation: "Заявка на перевозку №3",
      loadingAddress: {
        name: "Пункт загрузки №3",
        loading: [44.0793595, 43.0592834],
      },
      unloadingAddress: {
        name: "Пункт разгрузки №3",
        unloading: [43.8493595, 44.0792834],
      },
    },
    {
      key: 4,
      id: 4,
      transportation: "Заявка на перевозку №4",
      loadingAddress: {
        name: "Пункт загрузки №4",
        loading: [44.0893595, 43.0592834],
      },
      unloadingAddress: {
        name: "Пункт разгрузки №4",
        unloading: [43.8493595, 44.0892834],
      },
    },
    {
      key: 5,
      id: 5,
      transportation: "Заявка на перевозку №5",
      loadingAddress: {
        name: "Пункт загрузки №5",
        loading: [44.0993595, 43.0592834],
      },
      unloadingAddress: {
        name: "Пункт разгрузки №5",
        unloading: [43.8493595, 44.0992834],
      },
    },
  ],
  coordinates: {
    loading: [0, 0],
    unLoading: [0, 0],
  },
};

const transportationSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getLoadingCoordinates(state: InitialStateType, action: any) {
      state.coordinates.loading = action.payload;
    },
    getUnLoadingCoordinates(state: InitialStateType, action: any) {
      state.coordinates.unLoading = action.payload;
    },
  },

  extraReducers: {},
});

export const { getLoadingCoordinates, getUnLoadingCoordinates } =
  transportationSlice.actions;

export default transportationSlice.reducer;
