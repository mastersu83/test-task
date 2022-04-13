import { Select } from "antd";
import React from "react";
import { TransportationType } from "./types/transportationType";
import { useAppDispatch, useAppSelector } from "./hooks/appHooks";
import {
  getLoadingCoordinates,
  getUnLoadingCoordinates,
} from "./redux/reducers/transportationSlice";

// const { Panel } = Collapse;

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

  function handleChangeLoading(loading: any) {
    dispatch(getLoadingCoordinates(loading));
  }
  function handleChangeUnLoading(unloading: any) {
    dispatch(getUnLoadingCoordinates(unloading));
  }

  return (
    <>
      <Select
        bordered={false}
        defaultValue={"Выберите пункт"}
        style={{ width: "100%", border: "none" }}
      >
        {option.map((option) =>
          loading ? (
            <Option key={option.id} value={option.loadingAddress.name}>
              <div
                onClick={() =>
                  handleChangeLoading(option.loadingAddress.loading)
                }
              >
                {option.loadingAddress.name}
              </div>
            </Option>
          ) : (
            <Option key={option.id} value={option.unloadingAddress.name}>
              <div
                onClick={() =>
                  handleChangeUnLoading(option.unloadingAddress.unloading)
                }
              >
                {option.unloadingAddress.name}
              </div>
            </Option>
          )
        )}
      </Select>
      {/*<Collapse accordion>*/}
      {/*  {loading ? (*/}
      {/*    <Panel header={transportations.loadingAddress.name} key="1">*/}
      {/*      <p>{transportations.loadingAddress.name}</p>*/}
      {/*    </Panel>*/}
      {/*  ) : (*/}
      {/*    <Panel header={transportations.unloadingAddress.name} key="1">*/}
      {/*      <p>{transportations.loadingAddress.name}</p>*/}
      {/*    </Panel>*/}
      {/*  )}*/}
      {/*</Collapse>*/}
    </>
  );
};

export default SelectTask;
