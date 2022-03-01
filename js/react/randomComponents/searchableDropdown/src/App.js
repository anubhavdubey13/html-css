import "./styles.css";
import Dropdown from "./components/Dropdown";
import SearchableDropdown from "./components/SearchableDropdown";

export default function App() {
  return (
    <div className="App">
      <h2>Dropdown: Single and Multi Select</h2>
      <div>
        <h3>Single select</h3>
        <Dropdown
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
          ]}
        />
      </div>
      <div className="multiselect">
        <h3>Multi-select</h3>
        <Dropdown
          multiple={true}
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
          ]}
        />
      </div>
      <h2>Searchable Dropdown</h2>
      <div className="withoutDefaultValue">
        <h3>Without default value prop</h3>
        <SearchableDropdown
          options={[
            { value: "chocolate" },
            { value: "strawberry" },
            { value: "vanilla" }
          ]}
        />
      </div>
      <div className="withDefaultValue">
        <h3>With default value prop</h3>
        <SearchableDropdown
          options={[
            { value: "chocolate" },
            { value: "strawberry" },
            { value: "vanilla" }
          ]}
        />
      </div>
    </div>
  );
}
