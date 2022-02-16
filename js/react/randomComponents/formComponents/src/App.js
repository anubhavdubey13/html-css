import "./styles.css";
import Button from "./components/button/Button";

export default function App() {
  return (
    <div className="App">
      <h2>Section: Buttons</h2>
      <div className="Buttons">
        <Button label={"Default"} />
        <Button label={"Disabled"} disabled={true} />
        <Button label="primary" variant="primary" />
        <Button label="secondary" variant="secondary" />
        <Button label="basic" variant="basic" />
        <Button label="outline" variant="outline" />
        <Button label="Link" variant="link" />
        <Button label="Medium" variant="primary" size="medium" />
        <Button label="Large" variant="outline" size="large" />
      </div>
    </div>
  );
}
