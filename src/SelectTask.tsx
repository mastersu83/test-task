import { Select } from "antd";
import React from "react";
import {
  LoadingAddressType,
  TransportationType,
  UnLoadingAddressType,
} from "./types/transportationType";
import { useAppDispatch, useAppSelector } from "./hooks/appHooks";
import {
  getLoadingCoordinates,
  getUnLoadingCoordinates,
} from "./redux/reducers/transportationSlice";

const { Option } = Select;

type PropsType = {
  transportations: TransportationType;
  loading?: boolean;
};

const SelectTask: React.FC<PropsType> = ({ transportations, loading }) => {
  const dispatch = useAppDispatch();
  const { transportations: option } = useAppSelector(
    (state) => state.transportationSlice
  );

  function handleChangeLoading(loading: LoadingAddressType) {
    dispatch(getLoadingCoordinates(loading));
  }
  function handleChangeUnLoading(unloading: UnLoadingAddressType) {
    dispatch(getUnLoadingCoordinates(unloading));
  }

  return (
    <>
      <Select
        bordered={false}
        defaultValue={
          loading
            ? transportations.loadingAddress.name
            : transportations.unloadingAddress.name
        }
        style={{ width: "100%", border: "none" }}
      >
        {option.map((option) =>
          loading ? (
            <Option key={option.id} value={option.loadingAddress.name}>
              <label onClick={() => handleChangeLoading(option.loadingAddress)}>
                {option.loadingAddress.name}
              </label>
            </Option>
          ) : (
            <Option key={option.id} value={option.unloadingAddress.name}>
              <label
                onClick={() => handleChangeUnLoading(option.unloadingAddress)}
              >
                {option.unloadingAddress.name}
              </label>
            </Option>
          )
        )}
      </Select>
    </>
  );
};

export default SelectTask;
