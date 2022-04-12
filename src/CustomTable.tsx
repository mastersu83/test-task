import { Table, Tabs } from "antd";
import SelectTask from "./SelectTask";
import { useAppSelector } from "./hooks/appHooks";
import { TransportationType } from "./types/transportationType";

const { Column } = Table;
const { TabPane } = Tabs;

const CustomTable = () => {
  const { transportations } = useAppSelector(
    (state) => state.transportationSlice
  );

  return (
    <>
      <Tabs size={"large"} tabPosition="left">
        {transportations.map((tr) => (
          <TabPane key={tr.id} tab={tr.transportation}>
            <SelectTask transportations={tr} />
          </TabPane>
        ))}
      </Tabs>
      {/*<Table pagination={false} dataSource={transportations}>*/}
      {/*  <Column*/}
      {/*    title="Заявки"*/}
      {/*    render={(data: TransportationType) => (*/}
      {/*      <SelectTask key={data.key} transportations={data} />*/}
      {/*      // <>*/}
      {/*      //   {data.map((tag) => (*/}
      {/*      //     <SelectTask color="blue" key={tag.key}>*/}
      {/*      //       {tag}*/}
      {/*      //     </SelectTask>*/}
      {/*      //   ))}*/}
      {/*      // </>*/}
      {/*    )}*/}
      {/*  />*/}
      {/*</Table>*/}
    </>
  );
};

export default CustomTable;
