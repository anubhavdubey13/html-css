import "./styles.css";
import Accordion from "./components/Accordion";
import mockData from "./components/MOCK_DATA.json";

export default function App() {
  return (
    <div className="App">
      <h2>Accordion</h2>
      <Accordion data={mockData} title={"state"} description={"capital"} />
    </div>
  );
}
