import "./styles.css";
import Button from "./components/button/Button";
import InputNew from "./components/inputNew/InputNew";

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
      <h2>Section: Input</h2>
      <div className="InputNew">
        <InputNew
          name={"text"}
          type={"text"}
          placeholder={"Enter text here"}
          label={"Text"}
          helpertext={"This accepts text input"}
        />
        <InputNew
          name={"email"}
          type={"email"}
          placeholder={"Enter email here"}
          label={"Email"}
          helpertext={"This accepts email input"}
        />
        <InputNew
          name={"number"}
          type={"number"}
          placeholder={"Enter number here"}
          label={"Number"}
          helpertext={"This accepts number input"}
        />
        <InputNew
          name={"date"}
          type={"date"}
          label={"Date"}
          helpertext={"This accepts date input"}
        />
      </div>
    </div>
  );
}
