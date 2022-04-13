import { Col, Divider, Row, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "./hooks/appHooks";
import { useState } from "react";
import {
  getLoadingCoordinates,
  getUnLoadingCoordinates,
} from "./redux/reducers/transportationSlice";
import SelectTask from "./SelectTask";

const style = { padding: "8px 8px" };

const CustomTable = () => {
  const dispatch = useAppDispatch();
  const { transportations } = useAppSelector(
    (state) => state.transportationSlice
  );

  const [activeTransportation, setActiveTransportation] = useState<number>();

  const onClickTransport = (
    id: number,
    loading: number[],
    unloading: number[]
  ) => {
    setActiveTransportation(id);
    dispatch(getLoadingCoordinates(loading));
    dispatch(getUnLoadingCoordinates(unloading));
  };

  // useEffect(() => {
  //   dispatch(getLoadingCoordinates(transportations[0].loadingAddress.loading));
  //   dispatch(
  //     getUnLoadingCoordinates(transportations[0].unloadingAddress.unloading)
  //   );
  // }, []);

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
            onClick={() =>
              onClickTransport(
                tr.id,
                tr.loadingAddress.loading,
                tr.unloadingAddress.unloading
              )
            }
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
