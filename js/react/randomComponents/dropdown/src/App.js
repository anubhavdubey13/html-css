import "./styles.css";
import Dropdown from "./components/Dropdown";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Dropdown
        options={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" }
        ]}
      />

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
