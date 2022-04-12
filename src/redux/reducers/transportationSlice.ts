import { TransportationType } from "../../types/transportationType";
import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  transportations: TransportationType[];
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
        loading: [44.0593595, 43.0592834],
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
};

const transportationSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getMoreProducts(state: InitialStateType, action: any) {
      return state;
    },
  },

  // extraReducers: {
  //   [getCategoryProducts.pending.type]: (state: InitialStateType) => {
  //     state.allProductsIdSuccess = false;
  //   },
  //   [getCategoryProducts.fulfilled.type]: (
  //       state: initialStateType,
  //       action: PayloadAction<IProductsType[]>
  //   ) => {
  //     if (
  //         !action.payload.some((prod) =>
  //             state.allProductsId.some((p) => p === prod.id)
  //         )
  //     ) {
  //       state.allProductsId = action.payload.map((prod) => prod.id);
  //       state.products = state.products.concat(action.payload);
  //       state.allProductsIdSuccess = true;
  //     } else if (!state.products.length) {
  //       state.allProductsId = action.payload.map((prod) => prod.id);
  //       state.products = action.payload;
  //       state.allProductsIdSuccess = true;
  //     }
  //   },
  //
  //   [getProductsImg.fulfilled.type]: (
  //       state: initialStateType,
  //       action: PayloadAction<IProductsImgType[]>
  //   ) => {
  //     state.products = state.products.map((prod) => ({
  //       ...prod,
  //       images: prod.images
  //           ? prod.images
  //           : action.payload.filter((img) => img.product_id === prod.id),
  //     }));
  //     state.allProductsIdSuccess = false;
  //   },
  //
  //   [getProductsPrice.fulfilled.type]: (
  //       state: initialStateType,
  //       action: PayloadAction<IProductsPriceType[]>
  //   ) => {
  //     state.products = state.products.map((prod) => ({
  //       ...prod,
  //       price: prod.price
  //           ? prod.price
  //           : action.payload.filter((price) => price.product_id === prod.id),
  //     }));
  //     // getProductVariationPropertyValues(3);
  //     state.allProductsIdSuccess = false;
  //     state.allProductsSuccess = true;
  //   },
  //   [getProductVariationPropertyValues.fulfilled.type]: (
  //       state: initialStateType,
  //       action: PayloadAction<IProductVariationPropertyValuesType[]>
  //   ) => {
  //     state.products = state.products.map((prod) => ({
  //       ...prod,
  //       price: prod.price.map((price) => ({
  //         ...price,
  //         productVariationPropertyValues: action.payload.filter(
  //             (property) => price.id === property.product_variation_id
  //         ),
  //       })),
  //     }));
  //     state.allProductsIdSuccess = false;
  //   },
  //   [getProductVariationProperties.fulfilled.type]: (
  //       state: initialStateType,
  //       action: PayloadAction<IProductVariationPropertiesType[]>
  //   ) => {
  //     state.productVariationProperties = action.payload;
  //   },
  //   [getProductVariationPropertyListValues.fulfilled.type]: (
  //       state: initialStateType,
  //       action: PayloadAction<IProductVariationPropertiesListType[]>
  //   ) => {
  //     state.productVariationPropertyListValues = action.payload;
  //   },
  // },
});

// export const transportationReducer = (state = initialState, action: any) => {
//   return state;
// };

export default transportationSlice.reducer;
