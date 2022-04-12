import { Col, Divider, Row, Table, Typography } from "antd";
import SelectTask from "./SelectTask";
import { useAppDispatch, useAppSelector } from "./hooks/appHooks";
import { useEffect, useState } from "react";
import {
  getLoadingCoordinates,
  getUnLoadingCoordinates,
} from "./redux/reducers/transportationSlice";

const style = { padding: "8px 8px" };

const CustomTable = () => {
  const dispatch = useAppDispatch();
  const { transportations } = useAppSelector(
    (state) => state.transportationSlice
  );

  const [activeTransportation, setActiveTransportation] = useState<number>(1);

  useEffect(() => {
    dispatch(getLoadingCoordinates(transportations[0].loadingAddress.loading));
    dispatch(
      getUnLoadingCoordinates(transportations[0].unloadingAddress.unloading)
    );
  }, []);

  return (
    <>
      <Row align={"middle"} gutter={16} style={style}>
        <Col span={8}>
          <Typography.Title
            style={{ margin: 0, overflow: "hidden", maxHeight: "25px" }}
            level={5}
          >
            Заявки
          </Typography.Title>
        </Col>
        <Col span={8}>
          <Typography.Title
            style={{ margin: 0, overflowY: "auto", maxHeight: "25px" }}
            level={5}
          >
            Пункт погрузки
          </Typography.Title>
        </Col>
        <Col span={8}>
          <Typography.Title
            style={{ margin: 0, overflow: "auto", maxHeight: "25px" }}
            level={5}
          >
            Пункт разгрузки
          </Typography.Title>
        </Col>
      </Row>
      <Divider style={{ margin: "10px 0" }} />
      {transportations.map((tr) => (
        <Row
          onClick={() => setActiveTransportation(tr.id)}
          className={activeTransportation === tr.id ? "active" : ""}
          align={"middle"}
          key={tr.id}
          gutter={16}
          style={{
            whiteSpace: "nowrap",
            borderBottom: "1px solid red",
            padding: "15px",
            cursor: "pointer",
          }}
        >
          <Col
            style={{
              whiteSpace: "nowrap",
              overflowX: "auto",
              padding: "5px",
            }}
            span={8}
          >
            {tr.transportation}
          </Col>
          <Col
            style={{
              whiteSpace: "nowrap",
              overflowX: "auto",
              padding: "5px",
            }}
            span={8}
          >
            <SelectTask transportations={tr} loading />
          </Col>
          <Col
            style={{
              whiteSpace: "nowrap",
              overflowX: "auto",
              padding: "5px",
            }}
            span={8}
          >
            <SelectTask transportations={tr} />
          </Col>
        </Row>
      ))}
    </>
  );
};

export default CustomTable;
