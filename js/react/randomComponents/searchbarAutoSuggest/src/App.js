import "./styles.css";
import Searchbar from "./searchbar/Searchbar";
import reqData from "./data/MOCK_DATA.json";

export default function App() {
  return (
    <div className="App">
      <Searchbar requiredData={reqData} />
    </div>
  );
}
