import "./styles.css";
import ProgressBar from "./components/ProgressBar";
import { useEffect, useState } from "react";

export default function App() {
  let [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 1;
        if (newValue === 100) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 100);
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ProgressBar value={value} />
    </div>
  );
}
