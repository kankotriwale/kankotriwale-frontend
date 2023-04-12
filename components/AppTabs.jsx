import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CardItems from "./CardItems";
import cardData from "../cardsData.json";
import cardDataSecond from "../cardsDataSecond.json";

export default function AppTabs() {
  return (
    <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="all" title="All Items">
        <CardItems data={cardData} />
      </Tab>
      <Tab eventKey="Royal" title="Royal">
        <CardItems data={cardDataSecond} />
      </Tab>
    </Tabs>
  );
}
