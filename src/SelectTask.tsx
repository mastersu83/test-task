import { Select } from "antd";
import React from "react";
import { TransportationType } from "./types/transportationType";

const { Option } = Select;

type PropsType = {
  transportations: TransportationType;
};

const SelectTask: React.FC<PropsType> = ({ transportations }) => {
  // console.log(transportations);
  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <Select
        bordered={false}
        defaultValue={transportations.transportation}
        style={{ width: "100%", border: "none" }}
        onChange={handleChange}
      >
        <Option value="jack">{transportations.loadingAddress.name}</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Select
        bordered={false}
        defaultValue={transportations.transportation}
        style={{ width: "100%", border: "none" }}
        onChange={handleChange}
      >
        <Option value="jack">{transportations.loadingAddress.name}</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </>
  );
};

export default SelectTask;
