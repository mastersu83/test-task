import { Select } from "antd";
import React from "react";
import { TransportationType } from "./types/transportationType";
import { useAppDispatch, useAppSelector } from "./hooks/appHooks";
import { getLoadingCoordinates } from "./redux/reducers/transportationSlice";

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

  console.log(transportations);
  // console.log("разгрузка-", transportations.unloadingAddress.unloading);

  function handleChange(a: any, b: any) {
    console.log(b);
    // console.log(transportations.loadingAddress.loading);
    dispatch(getLoadingCoordinates(transportations.loadingAddress.loading));
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
        onSelect={handleChange}
        // onChange={handleChange}
        // onClick={handleChange}
      >
        {option.map((option) => (
          <Option
            key={option.id}
            value={
              loading
                ? option.loadingAddress.name
                : option.unloadingAddress.name
            }
          >
            {loading
              ? option.loadingAddress.name
              : option.unloadingAddress.name}
          </Option>
        ))}
      </Select>
      {/*<Select*/}
      {/*  bordered={false}*/}
      {/*  defaultValue={transportations.unloadingAddress.name}*/}
      {/*  style={{ width: "100%", border: "none" }}*/}
      {/*  onChange={handleChange}*/}
      {/*>*/}
      {/*  <Option value="jack">{transportations.loadingAddress.name}</Option>*/}
      {/*  <Option value="lucy">Lucy</Option>*/}
      {/*  <Option value="disabled" disabled>*/}
      {/*    Disabled*/}
      {/*  </Option>*/}
      {/*  <Option value="Yiminghe">yiminghe</Option>*/}
      {/*</Select>*/}
    </>
  );
};

export default SelectTask;
