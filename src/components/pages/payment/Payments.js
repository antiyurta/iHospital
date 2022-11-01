import { Tabs } from "antd";
import Ambulatory from "./Ambulatory";

function Payments() {
  const tabs = [{ label: "Амбултори", key: 1, children: <Ambulatory /> }];
  return <Tabs items={tabs} />;
}
export default Payments;
